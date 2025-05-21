// Sample photo data
        const photos = [
            { src: 'https://source.unsplash.com/random/600x400?nature', caption: 'Nature' },
            { src: 'https://source.unsplash.com/random/600x400?city', caption: 'City' },
            { src: 'https://source.unsplash.com/random/600x400?technology', caption: 'Technology' },
            { src: 'https://source.unsplash.com/random/600x400?animal', caption: 'Animal' },
            { src: 'https://source.unsplash.com/random/600x400?architecture', caption: 'Architecture' },
            { src: 'https://source.unsplash.com/random/600x400?food', caption: 'Food' },
            { src: 'https://source.unsplash.com/random/600x400?people', caption: 'People' },
            { src: 'https://source.unsplash.com/random/600x400?travel', caption: 'Travel' }
        ];
        
        // Sample video data
        const videos = [
            { src: 'https://www.example.com/video1.mp4', caption: 'Sunset' },
            { src: 'https://www.example.com/video2.mp4', caption: 'Ocean' },
            { src: 'https://www.example.com/video3.mp4', caption: 'Mountains' },
            { src: 'https://www.example.com/video4.mp4', caption: 'Wildlife' }
        ];
        
        // Function to load photos
        function loadPhotos() {
            const gallery = document.getElementById('photoGallery');
            
            photos.forEach(photo => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                
                const img = document.createElement('img');
                img.src = photo.src;
                img.alt = photo.caption;
                
                const caption = document.createElement('div');
                caption.className = 'caption';
                caption.textContent = photo.caption;
                
                item.appendChild(img);
                item.appendChild(caption);
                gallery.appendChild(item);
            });
        }
        
        // Function to load videos
        function loadVideos() {
            const gallery = document.getElementById('videoGallery');
            
            videos.forEach(video => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                
                const vid = document.createElement('video');
                vid.src = video.src;
                vid.controls = true;
                
                const caption = document.createElement('div');
                caption.className = 'caption';
                caption.textContent = video.caption;
                
                item.appendChild(vid);
                item.appendChild(caption);
                gallery.appendChild(item);
            });
        }
        
        // // Home button functionality
        // document.querySelector('.home-btn').addEventListener('click', () => {
        //     window.scrollTo({
        //         top: 0,
        //         behavior: 'smooth'
        //     });
        // });
        
        // Initialize the galleries when page loads
        window.addEventListener('DOMContentLoaded', () => {
            loadPhotos();
            loadVideos();
        });