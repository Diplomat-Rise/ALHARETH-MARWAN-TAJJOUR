

function downloadVCard() {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:ALHARETH MARWAN TAJJOUR 
TITLE:Sales Manager
ORG:RISE Properties
TEL;TYPE=WORK,VOICE:+971521617408
TEL;TYPE=WORK,VOICE:+971523084300
EMAIL:marwan@riseproperties.ae
URL:http://www.riseproperties.ae
ADR;TYPE=WORK:;;PO Box No 181702, Office NO.1607, Opal Tower, Business Bay;Dubai;;UAE
END:VCARD
  `.trim();

  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'ALHARETH MARWAN TAJJOUR.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.querySelector('.save-contact-button').addEventListener('click', function (e) {
  e.preventDefault();
  downloadVCard();
});

