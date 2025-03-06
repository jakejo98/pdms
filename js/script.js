$(document).ready(function(){
  phoneNumberFormatting();
})

function phoneNumberFormatting(){
  $('#phone').on('input', function() {
    let inputValue = $(this).val().replace(/\D/g, ''); // 숫자만 남기기

    // 11자리 이상 입력되지 않도록 제한
    if (inputValue.length > 11) {
      inputValue = inputValue.substring(0, 11);
    }

    if (inputValue.length > 3 && inputValue.length <= 6) {
      inputValue = inputValue.replace(/(\d{3})(\d{1,})/, '$1-$2');
    } else if (inputValue.length > 6) {
      inputValue = inputValue.replace(/(\d{3})(\d{4})(\d{1,})?/, (match, p1, p2, p3) => {
        return p3 ? `${p1}-${p2}-${p3}` : `${p1}-${p2}`; // 7자리일 때는 '-' 추가 안 함
      });
    }

    $(this).val(inputValue);
  });
}
