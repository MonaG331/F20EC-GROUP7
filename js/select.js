document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('submitBtn').addEventListener('click', submitClassfication);
});

function submitClassfication() {
	var classfication = document.getElementById('imageClassfication');
	var selectedImages = [];
	classfication.querySelectorAll('input[name="image"]:checked').forEach(function(checkbox) {
        selectedImages.push(checkbox.value);
    });
	//Jump based on the selected image
	if (selectedImages.length > 0) {
		if (selectedImages.length == 1){ 
		// Choose one image
			switch(selectedImages[0])
			{
					case 'love':
						window.location.href = 'love.html';
						break;
					case 'history':
						window.location.href = 'history.html';
						break;
					case 'reasoning':
						window.location.href = 'reasoning.html';
						break;
			}
		} else if (selectedImages.length == 2) {
		// Choose two images
			selectedImages.sort(); // Sort images
			var combination = selectedImages.join('');
			switch(combination){
				case 'historylove':
					window.location.href = 'love+history.html';
					break;
				case 'lovereasoning':
					window.location.href = 'love+reason.html';
					break;
				case 'historyreasoning':
					window.location.href = 'reason+history.html';
					break;
			}			
		} else if (selectedImages.length == 3){
		// Choose two images
			window.location.href = 'books.html';
			}
			
		} else {
			alert('Please select at least one of the options');
			}
		}