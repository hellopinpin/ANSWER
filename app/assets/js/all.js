ClassicEditor
.create( document.querySelector( '#editor' ), {
  placeholder: 'Reply an answer…'
} )
.then( editor => {
  console.log( editor );
} )
.catch( error => {
  console.error( error );
} );

$(document).ready(function () {
  $('.btn-comment-reply').click(function (e) { 
    e.preventDefault();
    $(this).parentsUntil('.tab-pane').siblings('.card').find('.comment-reply').slideToggle();
    $(this).parentsUntil('.tab-pane').siblings('.card').find('.comment-editor').slideToggle();
    $(this).parentsUntil('.tab-pane').slideToggle(); //comment-pagination
  });
  $('.btn-editor').click(function (e) { 
    e.preventDefault();
    $(this).parentsUntil('card-body').find('.comment-editor').slideUp();
    $(this).parentsUntil('tab-pane').siblings('.comment-reply').slideToggle();
    $(this).parentsUntil('tab-pane').siblings('.comment-pagination').show(); 
  });  
  
  $('.btn-expand-more').click(function (e) { 
    e.preventDefault();
    $('.admin-expand').slideToggle().css('display','flex');
  });

  $('.nav-search').hover(function () {    
      $('.nav-search>input').css('border','1px solid #212529');      
    }, function () {
      $('.nav-search>input').css('border','none');
    }
  );
});