function verifyForm(){
    var is_err = false;
    var err_msg = 'The following inputs are invalid:\n\n';
    
    if(document.request.first_name.value == ""){
        is_err = true;
        err_msg += 'First name,\n';
        document.getElementById('notice_first_name').style.display = "block";
        document.getElementById('first_name').style.backgroundColor = '#ffcccc';
    }else{
        document.getElementById('notice_first_name').style.display = "none";
        document.getElementById('first_name').style.backgroundColor = '#ffffff';
    }
    if(document.request.family_name.value == ""){
        is_err = true;
        err_msg += 'Family name,\n';
        document.getElementById('notice_family_name').style.display = "block";
        document.getElementById('family_name').style.backgroundColor = '#ffcccc';
    }else{
        document.getElementById('notice_family_name').style.display = "none";
        document.getElementById('family_name').style.backgroundColor = '#ffffff';
    }
    if(document.request.title.value == ""){
        is_err = true;
        err_msg += 'Title,\n';
        document.getElementById('notice_title').style.display = "block";
        document.getElementById('cell_title').style.backgroundColor = '#ffcccc';
    }else{
        document.getElementById('notice_title').style.display = "none";
        document.getElementById('cell_title').style.backgroundColor = '#ffffff';;
    }
    if(document.request.country.value == ""){
        is_err = true;
        err_msg += 'Country,\n';
        document.getElementById('notice_country').style.display = "block";
        document.getElementById('country').style.backgroundColor = '#ffcccc';
    }else{
        document.getElementById('notice_country').style.display = "none";
        document.getElementById('country').style.backgroundColor = '#ffffff';
    }
    if(document.request.institute.value == ""){
        is_err = true;
        err_msg += 'Affiliated institute,\n';
        document.getElementById('notice_institute').style.display = "block";
        document.getElementById('institute').style.backgroundColor = '#ffcccc';
    }else{
        document.getElementById('notice_institute').style.display = "none";
        document.getElementById('institute').style.backgroundColor = '#ffffff';;
    }
    if(document.request.email.value == ""){
        is_err = true;
        err_msg += 'E-mail address,\n';
        document.getElementById('notice_email').style.display = "block";
        document.getElementById('notice_invalid_email').style.display = "none";
        document.getElementById('email').style.backgroundColor = '#ffcccc';
    }else if(document.request.email.value != "" && false){
        is_err = true;
        err_msg += 'E-mail address,\n';
        document.getElementById('notice_invalid_email').style.display = "block";
        document.getElementById('notice_email').style.display = "none";
        document.getElementById('email').style.backgroundColor = '#ffcccc';
    }else{
        document.getElementById('notice_invalid_email').style.display = "none";
        document.getElementById('email').style.backgroundColor = '#ffffff';
    }
    if(document.request.banquet.value == ""){
        is_err = true;
        err_msg += 'Banquet,\n';
        document.getElementById('notice_banquet').style.display = "block";
        document.getElementById('cell_banquet').style.backgroundColor = '#ffcccc';
    }else{
        document.getElementById('notice_banquet').style.display = "none";
        document.getElementById('cell_banquet').style.backgroundColor = '#ffffff';
    }
    if(!document.request.accompanying.value.match(/^\s*[0-9]*$/)){
        is_err = true;
        err_msg += 'The number of accompanying people,\n';
        document.getElementById('notice_accompanying').style.display = "block";
        document.getElementById('accompanying').style.backgroundColor = '#ffcccc';
    }else{
        document.getElementById('notice_accompanying').style.display = "none";
        document.getElementById('accompanying').style.backgroundColor = '#ffffff';
    }
    if(document.request.special.value.length > 500){
        is_err = true;
        err_msg += 'Special requests,\n';
        document.getElementById('notice_special').style.display = "block";
        document.getElementById('special').style.backgroundColor = '#ffcccc';
    }else{
        document.getElementById('notice_special').style.display = "none";
        document.getElementById('special').style.backgroundColor = '#ffffff';
    };
    if(is_err){
        window.alert(err_msg.slice(0, -2) + '.');
        return false;
    }else{
        return true;
    }
}