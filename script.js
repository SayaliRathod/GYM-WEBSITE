const scrollReviews = (direction) => {
    const container = document.getElementById('reviewsContainer');
    const scrollAmount = container.offsetWidth; // Scroll by container's width
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  };
  
