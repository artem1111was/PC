
document.getElementById('buildBtn').addEventListener('click', function() {
    const cpu = document.getElementById('cpu').value;
    const motherboard = document.getElementById('motherboard').value;
    const ram = document.getElementById('ram').value;
    const gpu = document.getElementById('gpu').value;
    const tail = document.getElementById('tail').value;
    const SSD = document.getElementById('SSD').value;


    const result = `
        Вы собрали компьютер с следующими компонентами:
        <ul>
            <li>Процессор: ${cpu}</li>
            <li>Материнская плата: ${motherboard}</li>
            <li>Оперативная память: ${ram}</li>
            <li>Видеокарта: ${gpu}</li>
            <li>Корпус: ${tail}</li>
            <li>SSD: ${SSD}</li>


        </ul>
    `;

    document.getElementById('result').innerHTML = result;
});



 // Функция для обновления изображения в зависимости от выбранного значения
        function updateImage(selectElement, imageElement, imageMap) {
            const selectedValue = selectElement.value;
            imageElement.src = imageMap[selectedValue] || 'image/icon_motherboard.svg'; // Путь к изображению по умолчанию
        }

        // Обработчики событий для каждого выпадающего списка
        const cpuSelect = document.getElementById('cpu');
        const cpuImage = document.getElementById('pic_cpu');
        const cpuImageMap = {
            '': 'image/icon_processor.svg',
            'Intel i5': 'image/intel_i5.jpg',
            'AMD Ryzen 5': 'image/amd_ryzen_5.jpg',
            'Intel i7': 'image/intel_i7.jpg'
        };
        cpuSelect.addEventListener('change', () => updateImage(cpuSelect, cpuImage, cpuImageMap));

        const motherboardSelect = document.getElementById('motherboard');
        const motherboardImage = document.getElementById('pic_motherboard');
        const motherboardImageMap = {
            '': 'image/icon_motherboard.svg',
            'ASUS ROG Strix': 'image/ASUS ROG Strix.jpg',
            'MSI B450': 'image/board.webp',
            'Gigabyte B550M AORUS': 'image/tat.webp'
        };
        motherboardSelect.addEventListener('change', () => updateImage(motherboardSelect, motherboardImage, motherboardImageMap));

        const ramSelect = document.getElementById('ram');
        const ramImage = document.getElementById('pic_ram');
        const ramImageMap = {
            '': 'image/icon_ram.svg',
            '8GB DDR4 3200 МГц': 'image/ram.webp',
            '16GB DDR4 3200 МГц': 'image/ram1.jpg',
            '32GB DDR4 3200 МГц': 'image/ram2.jpg'
        };
        ramSelect.addEventListener('change', () => updateImage(ramSelect, ramImage, ramImageMap));

        const gpuSelect = document.getElementById('gpu');
        const gpuImage = document.getElementById('pic_gpu');
        const gpuImageMap = {
            '': 'image/icon_video.svg',
            'NVIDIA GTX 1660': 'image/video.webp',
            'AMD RX 580': 'image/aret.jpg',
            'NVIDIA RTX 3060': 'image/ret.jpg'
        };
        gpuSelect.addEventListener('change', () => updateImage(gpuSelect, gpuImage, gpuImageMap));

        const tailSelect = document.getElementById('tail');
        const tailImage = document.getElementById('pic_tail');
        const tailImageMap = {
            '': 'image/icon_korpus2.svg',
            'ZALMAN N4': 'image/cop.webp',
            'Cougar Duoface Pro RGB': 'image/nvnvnvnvnvnvnvnvnvnvnv.webp',
            'ARDOR GAMING Rare': 'image/tytytytyty.jpg'
        };
        tailSelect.addEventListener('change', () => updateImage(tailSelect, tailImage, tailImageMap));

        const ssdSelect = document.getElementById('SSD');
        const ssdImage = document.getElementById('pic_SSD');
        const ssdImageMap = {
            '': 'image/icon_ssd.svg',
            '500 ГБ 2.5 SATA': 'image/sasasassasasasasas.jpg',
            '1000 ГБ 2.5 SATA': 'image/gotgotgotgotgotogotogot.webp',
            '2000 ГБ 2.5 SATA': 'image/500gg.webp'
        };
        ssdSelect.addEventListener('change', () => updateImage(ssdSelect, ssdImage, ssdImageMap));
