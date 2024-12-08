// document.addEventListener('DOMContentLoaded', () => {
//     const likeButtons = document.querySelectorAll('.like-btn');

//     likeButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const likeCount = button.querySelector('.like-count');
//             let currentCount = parseInt(likeCount.textContent);
//             likeCount.textContent = currentCount + 1;
//         });
//     });
// }),
const faqHeaders = document.querySelectorAll('.faq-header');
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');

    // Loop through each like button
    likeButtons.forEach((button, index) => {
        const likeCount = button.querySelector('.like-count');
        
        // Check if there's a saved count in localStorage for this button
        const savedCount = localStorage.getItem(`likeCount-${index}`);
        if (savedCount) {
            likeCount.textContent = savedCount; // Set the saved count if it exists
        } else {
            likeCount.textContent = 0; // Default to 0 if no saved count
        }

        // Add click event to increment the count
        button.addEventListener('click', () => {
            let currentCount = parseInt(likeCount.textContent);
            currentCount++;
            likeCount.textContent = currentCount;

            // Save the new like count to localStorage
            localStorage.setItem(`likeCount-${index}`, currentCount);
        });
    });
}),


document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const popups = document.querySelectorAll('.popup');

    // Open the respective popup
    readMoreButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const targetPopupId = button.getAttribute('data-target');
            const targetPopup = document.getElementById(targetPopupId);
            if (targetPopup) {
                targetPopup.style.display = 'flex';
            }
        });
    });

    // Close the popup
    popups.forEach((popup) => {
        const closeButton = popup.querySelector('.close-btn');
        closeButton.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // Close the popup when clicking outside the content
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    });
}),

// faqHeaders = document.querySelectorAll(".faqs-container .faq-header");

// faqHeaders.forEach((header, i) => {
//   header.addEventListener("click", () => {
//     header.nextElementSibling.classList.toggle("active");

//     const open = header.querySelector(".open");
//     const close = header.querySelector(".close");

//     if (header.nextElementSibling.classList.contains("active")) {
//       open.classList.remove("active");
//       close.classList.add("active");
//     } else {
//       open.classList.add("active");
//       close.classList.remove("active");
//     }
//   });
// });

// Select all FAQ headers


// Add a click event listener to each FAQ header
faqHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    const contentContainer = header.parentElement;

    // Toggle the 'active' class on the parent content container
    contentContainer.classList.toggle('active');
  });
}),

document.addEventListener("DOMContentLoaded", () => {
    const faqLink = document.querySelector('.nav-links li a[href="indexfaq.html"]');
    const faqsContainer = document.querySelector('.faqs-container');
  
    faqLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default link behavior
      faqsContainer.scrollIntoView({
        behavior: "smooth", // Smooth scrolling effect
        block: "start", // Align to the top of the container
      });
    });
  });
  


