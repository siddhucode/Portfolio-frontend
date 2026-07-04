const toast = document.getElementById('toast');
  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(()=> toast.classList.remove('show'), 1800);
  }

  async function copyValue(value, label){
    try{
      await navigator.clipboard.writeText(value);
      showToast(label + ' copied to clipboard');
    }catch(e){
      showToast(value);
    }
  }

  document.getElementById('copyEmail').addEventListener('click', (e) => {
    copyValue(e.currentTarget.dataset.email, 'Email');
  });
  document.getElementById('copyPhone').addEventListener('click', (e) => {
    copyValue(e.currentTarget.dataset.phone, 'Phone');
  });

  const card = document.getElementById('card');
  const photo = document.getElementById('photo');
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    photo.style.transform = `translate(${x*5}px, ${y*5}px) scale(1.03)`;
  });
  card.addEventListener('mouseleave', () => {
    photo.style.transform = 'translate(0,0) scale(1)';
  });
