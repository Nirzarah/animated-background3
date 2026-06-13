// Dynamic animation enhancement
document.addEventListener('DOMContentLoaded', function() {
    const orbs = document.querySelectorAll('.gradient-orb');
    
    // Add interactive mouse movement effect
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const offsetX = (x - 0.5) * 50 * (index + 1);
            const offsetY = (y - 0.5) * 50 * (index + 1);
            
            orb.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });
    
    // Reset on mouse leave
    document.addEventListener('mouseleave', function() {
        orbs.forEach(orb => {
            orb.style.transform = 'translate(0, 0)';
        });
    });
    
    console.log('Animated background loaded successfully!');
});
