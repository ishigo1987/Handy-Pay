module.exports = (userPhone,indicatifCode)=>{
	const PhoneNumber = require('awesome-phonenumber');
	indicatifCode === undefined ? indicatifCode = PhoneNumber(userPhone).getRegionCode() : indicatifCode
	const checkPhoneNumber = new PhoneNumber(userPhone, indicatifCode);
	if(checkPhoneNumber.isValid() === true){
	  return "Numéro de téléphone valide";
	}else{
	  return "Numéro de téléphone invalide";
	}
};
