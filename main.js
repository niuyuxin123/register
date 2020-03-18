$(function(){
var $username= $('#username'),
    $phone   = $('#phone'),
    $pwd     = $('#pwd'),
    $code    = $('#code'),
    $button  = $('#button'),
    $checkbox= $('#checkbox'),
    $submit  = $('#submit');
var num = 30,
    timer;

$submit.click(function(){
  var str='';
  if(!validateC()){
    str=str+'1';
  }
  if(!validateP()){
    $phone.css('border-color','#F55');
    str=str+'2'
  }
  if(!validateU()){
    $username.css('border-color','#F55');
    str=str+'3';
  }
  if(!validatePWD()){
    $pwd.css('border-color','#F55');

    str=str+'4';
  }
  if(!$checkbox.is(':checked')){
    $('#bot').html('请勾选“阅读并接受百度用户协议”');
    str=str+'5';
  }else{
    $('#bot').html('');
  }
  if(str===''){
    alert('注册成功！')

  }else{
    return false;
  }

})

$username.focusout(function(){
  if(!validateU()){
    $username.css('border-color','#F55');
  }else{
    $username.css('border-color','#E0E0E0');
  }
})
$phone.focusout(function(){
  if(!validateP()){
    $phone.css('border-color','#F55');
  }else{
    $phone.css('border-color','#E0E0E0');
  }
})
$pwd.focusout(function(){
  if(!validatePWD()){
    $pwd.css('border-color','#F55');
  }else{
    $pwd.css('border-color','#E0E0E0');
  }
})
$code.focusout(function(){
  if(!validateC()){}
})

function validateC(){
  var $msg=$('#code-validation-message');
  if($code.val()==''){
    $msg.html('请您输入验证码');
    return false;
  }
  
  $msg.html('');
  return true;
}
function validatePWD(){
  var $msg=$("#pwd-validation-message");
  if($pwd.val()===''){
    $msg.html('请您输入密码');
    return false;
  }
  if(!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test($pwd.val())){
    $msg.html('密码设置不符合要求');
    return false;
  }
 
  $msg.html('');
  return true;

}

function validateP(){
  var $msg=$('#phone-validation-message');
  if($phone.val()===''){
    $msg.html('请您输入手机号');
    return false;
  }
  if(!/^[1][3-9][0-9]{9}/.test($phone.val())){
    $msg.html('手机号码格式不正确');
    return false;

  }
  $msg.html('');
  return true;

}
function validateU(){
  var $msg=$('#username-validation-message'),
      str=$username.val().replace(/[\u4e00-\u9fa5]/g,"aa");
  if($username.val()===''){
    $msg.html('请您输入用户名');
    return false;
  }
  if(/[^\u4E00-\u9FA5\w]/.test($username.val())){
    $msg.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
    return false;
  }
  if(!/\D/.test($username.val())){
    $msg.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
    return false;
  }
   if(/.{15,}/.test(str)){
    $msg.html('用户名不能超过7个汉字或14个字符');
    return false;
  }

  $msg.html('');
  return true;
}


$button.click(function(){
  if($phone.val()===''){
     $phone.css('border-color','#F55');
     $('#phone-validation-message').html('请您输入手机号');
  }
  else if(!validateP()){
    
  }
  else{
    timer = setInterval(function(){
    num--;
    if(num!==0){
      $button.attr('disabled','true');
      $button.val('重发验证('+num+')');

    }
    else{
      clearInterval(timer);
      $button.removeAttr('disabled');
      $button.val('获取验证码');
      $('#code-validation-message').html('请求超时，请稍后再试');
      num=30;
    }
  
},1000)
}})

}

)
