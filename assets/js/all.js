"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
$(document).ready(function () {
  $(".select-all").click(function () {
    if ($(".news-importent").hasClass('d-none')) {
      $(".news-importent").removeClass('d-none');
    }

    if ($(".news-newproduct").hasClass('d-none')) {
      $(".news-newproduct").removeClass('d-none');
    }
  });
  $(".select-importent").click(function () {
    if ($(".news-importent").hasClass('d-none')) {
      $(".news-importent").removeClass('d-none');
    }

    if (!$(".news-newproduct").hasClass('d-none')) {
      $(".news-newproduct").addClass('d-none');
    }
  });
  $(".select-newproduct").click(function () {
    if ($(".news-newproduct").hasClass('d-none')) {
      $(".news-newproduct").removeClass('d-none');
    }

    if (!$(".news-importent").hasClass('d-none')) {
      $(".news-importent").addClass('d-none');
    }
  });
});
//# sourceMappingURL=all.js.map
