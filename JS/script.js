  (function() { 
      'use strict'; 
      const appointmentBtn = document.getElementById('appointmentBtn'); 
      const collectionLink = document.getElementById('collectionLink'); 
 
      function handleAppointment() { 
        appointmentBtn.style.transform = 'scale(0.96)'; 
        setTimeout(() => { 
          appointmentBtn.style.transform = ''; 
        }, 150); 
 
       const message = '✨ Благодарим! Наш консультант свяжется с вами в течение 15 минут.\n(Демо-режим: форма записи)'; 
        alert(message); 
         
        const icon = appointmentBtn.querySelector('i'); 
        if (icon) { 
          icon.style.transform = 'translateX(4px)'; 
          setTimeout(() => { 
            icon.style.transform = ''; 
          }, 400); 
        } 
      } 
      function handleCollectionClick(event) { 
        event.preventDefault(); 
        collectionLink.style.opacity = '0.7'; 
        setTimeout(() => { 
          collectionLink.style.opacity = '1'; 
        }, 150); 
         
         alert('🌸 Здесь откроется галерея свадебных коллекций. (Демо)'); 
      } 
 
      if (appointmentBtn) {
         appointmentBtn.addEventListener('click', handleAppointment); 
      } 
 
      if (collectionLink) { 
        collectionLink.addEventListener('click', handleCollectionClick); 
      } 
 
      const section = document.querySelector('.bridal-section'); 
      if (section) { 
        section.style.opacity = '0'; 
        section.style.transform = 'translateY(8px)'; 
        section.style.transition = 'opacity 0.7s ease, transform 0.7s ease'; 
         
        window.addEventListener('load', () => { 
          setTimeout(() => { 
            section.style.opacity = '1'; 
            section.style.transform = 'translateY(0)'; 
          }, 100); 
        }); 
      } 
      const mainPhoto = document.querySelector('.main-photo'); 
      if (mainPhoto) { 
        mainPhoto.addEventListener('error', function() { 
          this.style.objectFit = 'cover'; 
        }); 
      } 
    })();