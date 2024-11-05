document.getElementById('moreInfoButton').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'More About Dhoni';
    }
});