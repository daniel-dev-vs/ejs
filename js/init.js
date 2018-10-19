(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    var el = $('.tabs');
    var instance = M.Tabs.init(el, {});

    $('#div-material-aula').on('click touchstart mousedown',function () {
      let $divArquivos = $('#div-arquivos');

      if ($divArquivos.is(':hidden')) {
        $divArquivos.show();
        $('#i-material-aula').html('keyboard_arrow_up');
      } else {
        $divArquivos.hide();
        $('#i-material-aula').html('keyboard_arrow_down');
      }
    });


  }); // end of document ready


})(jQuery); // end of jQuery name space
