function loadContent() {
    let youtubeLeftControls, youtubePlayer;  // for controls in youtube
    let currentVideo = "";                   // current video empty initialy
    let currentVideoBookmarks = [];          // array for bookmark store   



    /**************************************************************************************************************************************
      fetchBookmark function for fetch the bookmark and arange them when video loaded
    ****************************************************************************************************************************************/
  
    function fetchBookmarks(){
      return new Promise((resolve) => {
        chrome.storage.sync.get([currentVideo], (obj) => {
          resolve(obj[currentVideo] ? JSON.parse(obj[currentVideo]) : []);
        });
      });
    };


    /**************************************************************************************************************************************
     addtoBookmark function works when we click bookmark it will take time and call fetchBookmark to store bookmark  
    *************************************************************************************************************************************/
  

    async function addtoBookmark(){
      const currentTime = youtubePlayer.currentTime;
      const newBookmark = {
        time: currentTime,
        desc: "Bookmark at " + getTime(currentTime),
      };
  
      currentVideoBookmarks = await fetchBookmarks();
  
      chrome.storage.sync.set({
        [currentVideo]: JSON.stringify([...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time))
      });
    };

    /**************************************************************************************************************************************
     newVideoLoaded function workes when new video loaded then it will assign bookmark logo in
     youtube video and on click on button add to bookmark 
    *************************************************************************************************************************************/
  
    const newVideoLoaded = async () => {
      const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
  
      currentVideoBookmarks = await fetchBookmarks();
  
      if (!bookmarkBtnExists) {
        const bookmarkBtn = document.createElement("img");
  
        bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
        bookmarkBtn.className = "ytp-button " + "bookmark-btn";
        bookmarkBtn.id="yt_bookmark_btn"
        bookmarkBtn.title = "Click to bookmark current timestamp";
        bookmarkBtn.style.height="35px"
        bookmarkBtn.style.width="35px"
        bookmarkBtn.style.marginTop="5px"

        bookmarkBtn.style.transition = 'transform 0.3s ease';

        

        bookmarkBtn.addEventListener('mouseenter', function() {
          // Scale the image on mouseenter
          bookmarkBtn.style.transform = 'scale(1.2)'; 
        });
      
        bookmarkBtn.addEventListener('mouseleave', function() {
          // Revert back to the original scale on mouseleave
          bookmarkBtn.style.transform = 'scale(1)';
         
        });


        // bookmarkBtn.style.backgroundColor="blue"
        
        // bookmarkBtn.style.hover.transform= scale(1.1);

  
        youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
        youtubePlayer = document.getElementsByClassName('video-stream')[0];
  
        youtubeLeftControls.appendChild(bookmarkBtn);
        bookmarkBtn.addEventListener("click", addtoBookmark);
      }
    };

    /***************************************************************************************************************************************
     below function listen for messages from popup.js file 
     if the value is new it will call newVideoLoaded
     if value is play it will set current time to the value and play yt video from there
     if value is delete it will delete that bookmark
    *************************************************************************************************************************************/
  
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
      const { type, value, videoId } = obj;
  
      if (type === "NEW") {
        currentVideo = videoId;
        newVideoLoaded();
      } else if (type === "PLAY") {
        youtubePlayer.currentTime = value;
      } else if ( type === "DELETE") {
        currentVideoBookmarks = currentVideoBookmarks.filter((b) => b.time != value);
        chrome.storage.sync.set({ [currentVideo]: JSON.stringify(currentVideoBookmarks) });
  
        response(currentVideoBookmarks);
      }
    });
  
    newVideoLoaded();
  }

  loadContent();


  /***************************************************************************************************************************************
   getTime receive time and convert into sec
   @returns time in sec
  *****************************************************************************************************************************************/
  
  function getTime(t) {
    
    var date = new Date(0);
    date.setSeconds(t);
  
    return date.toISOString().substr(11, 8);
  };