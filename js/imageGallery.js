<script>
    window.onload = function() {
      var galleryClass = ".image-gallery-content";
      var imageContainerClass = " .views-row .views-field-field-imagen-del-articulo .field-content";
      var galleryItemContainers = document.querySelectorAll(galleryClass + " .views-row");
      var galleryImages = document.querySelectorAll(galleryClass + " img");
      var galleryImagesContainers = document.querySelectorAll(galleryClass + imageContainerClass);
      var galleryTitles = document.querySelectorAll(galleryClass + " .views-row .views-field-title");

      buildModalButtons (galleryImages, galleryImagesContainers, galleryClass + imageContainerClass);
      buildModalViews(galleryTitles, galleryImages, galleryItemContainers, galleryClass);
    };

    function buildModalButtons (imagesArray, imagesContainersArray, containerClass) {
      if ((imagesArray.length == imagesContainersArray.length) && (imagesArray.length > 0)) {
        for (var i = 0; i < imagesArray.length; i++) {
          var modalButtonStartTag = "<button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#imageModal";
          var modalButtonFinishTag = "'></button>";
          var modalButton = modalButtonStartTag + i + modalButtonFinishTag;
          imagesContainersArray[i].innerHTML = modalButton;
          var galleryImagesButtons = document.querySelectorAll(containerClass + " button");
          galleryImagesButtons[i].appendChild(imagesArray[i]);
        }
      }
    }

    function buildModalViews(titlesArray, imagesArray, itemContainersArray, galleryClass) {
      if ((imagesArray.length == titlesArray.length) && (imagesArray.length > 0)) {
        for (var i = 0; i < imagesArray.length; i++) {
          var modalView = getModalView(titlesArray[i].textContent, i);
          var modalViewContainer = document.createElement('div');
          modalViewContainer.innerHTML = modalView;
          itemContainersArray[i].appendChild(modalViewContainer);
          var modalBodyArray = document.querySelectorAll(galleryClass + " .modal-body");
          var modalImage = imagesArray[i].cloneNode(true);
          modalBodyArray[i].appendChild(modalImage);
        }
      }
    }

    function getModalView(modalTitle, index) {
      var modalViewStarTag = "<div id='imageModal"+ index + "' class='modal fade' role='dialog'><div class='modal-dialog'><div class='modal-content'>";
      var modalHeaderStarTag = "<div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>";
      var modalHeaderFinishTag = "</h4></div>";
      var modalHeaderTag = modalHeaderStarTag + modalTitle + modalHeaderFinishTag;
      var modalBodyTag = "<div class='modal-body'></div>";
      var modalViewFinishTag = "</div></div></div>";
      var modalView = modalViewStarTag + modalHeaderTag + modalBodyTag + modalViewFinishTag;
      return modalView;
    }
</script>
