
const babLinks = {
    'bab1': 'https://www.youtube.com/embed/zQSDYVoqLi8?si=nGZ_AvwAiQ_kwB55', 
    'bab2': 'https://www.youtube.com/embed/a_kIR33JhGo?si=wJU0SQPGcNzH8tC6', 
    'bab3': 'https://www.youtube.com/embed/IKauGQum-4s?si=tN9LAbcvvnv58_pg', 
    'bab4': 'https://www.youtube.com/embed/PZGNdmWGTLQ?si=yNZRVllff09TY0FW',
    'bab5': 'https://www.youtube.com/embed/x8MBQcOfpBA?si=n1TFRyeucOPSXGfJ',
    'bab6': 'https://www.youtube.com/embed/mAx-cNY3DtM?si=thWUv987P02-zE6E'
};

//@param {string} babKey 

function goToMateri(babKey) {
    const link = babLinks[babKey];
    if (link) {
        
        localStorage.setItem('currentMateriLink', link);
        
        window.location.href = 'materi.html';
    } else {
        alert('Link materi untuk bab ini belum tersedia.');
    }
}


function loadMateriIframe() {
    setTimeout(() => { 
        const iframe = document.getElementById('materiIframe');
        const storedLink = localStorage.getItem('currentMateriLink');
        
        if (iframe && storedLink) {
            iframe.src = storedLink;
        } else if (iframe) {
            iframe.src = 'https://default-link-error-atau-menu-utama'; 
        }
    }, 50); 
}