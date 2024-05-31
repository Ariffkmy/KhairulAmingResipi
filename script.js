$(document).ready(function() {
    const videoLinks = {
        'Nasi': [
            'https://www.instagram.com/p/C5crkCHvMp_/',
            'https://www.instagram.com/p/C39XzKhPY-w/',
            'https://www.instagram.com/p/CvL_YEMgqVW/',
            'https://www.instagram.com/p/CrFkDzwgApr/',
            'https://www.instagram.com/p/CqZ5BvnAhxj/'
        ],
        'Mee': [
            'https://www.instagram.com/p/C5C3VZPvIHn/',
            'https://www.instagram.com/p/Cz5yuGBvU5d/',
            'https://www.instagram.com/p/CtssvE_geBg/'
        ],
        'Thai': [
            'https://www.instagram.com/p/C4X21ukPruc/',
            'https://www.instagram.com/p/C0-3DopvB9n/',
            'https://www.instagram.com/p/CqzgF0lAfEs/',
            'https://www.instagram.com/p/CquFs3KAG1h/',
            'https://www.instagram.com/p/CqhYxWmguO2/',
            'https://www.instagram.com/p/CqZlrJSAYJs/'
          
            
        ],
        'Western': [
            'https://www.instagram.com/p/C03G7VjvHOO/',
            'https://www.instagram.com/p/C0ifyaHvff7/',
            'https://www.instagram.com/p/CzsbAOcPSTX/',
            'https://www.instagram.com/p/Cq4lSTeA6xF/'
        ],
        'Ayam': [
            'https://www.instagram.com/p/C5IBLmqv9fy/',
            'https://www.instagram.com/p/C49tMeZPEww/',
            'https://www.instagram.com/p/C4zYFsDPSvi/',
            'https://www.instagram.com/p/C4w2HLhvW7q/',
            'https://www.instagram.com/p/C4j8PJnv02b/',
            'https://www.instagram.com/p/Cyhyg8rPkd9/',
            'https://www.instagram.com/p/CxKKiO4Pj8K/',
            'https://www.instagram.com/p/Cwg-A45B6Hv/',
            'https://www.instagram.com/p/CvEObIkAaa-/',
            'https://www.instagram.com/p/CrKjDlSAHJ7/',
            'https://www.instagram.com/p/Cq1_aAQAPnK/',
            'https://www.instagram.com/p/CqmgRMLAtXZ/',
            'https://www.instagram.com/p/CqUavZSAc2O/',
            'https://www.instagram.com/p/CqKFlyBALVl/'
        ]
        ,
        'Daging': [
            'https://www.instagram.com/p/C5U-BO4PiTH/',
            'https://www.instagram.com/p/CuBWcIWgjCx/',
            'https://www.instagram.com/p/CrC60MkgBdE/',
            'https://www.instagram.com/p/CqR3_yTAm-3/'
        ],
        'Sup': [
            'https://www.instagram.com/p/EXAMPLE_SUP_EMBED_LINK1/',
            'https://www.instagram.com/p/EXAMPLE_SUP_EMBED_LINK2/'
        ],
        'Minum Petang': [
            'https://www.instagram.com/p/EXAMPLE_MINUM_PETANG_EMBED_LINK1/',
            'https://www.instagram.com/p/EXAMPLE_MINUM_PETANG_EMBED_LINK2/'
        ],
        'Ikan & Seafood': [
            'https://www.instagram.com/p/EXAMPLE_IKAN_SEAFOOD_EMBED_LINK1/',
            'https://www.instagram.com/p/EXAMPLE_IKAN_SEAFOOD_EMBED_LINK2/'
        ],
        'Dessert': [
            'https://www.instagram.com/p/EXAMPLE_DESSERT_EMBED_LINK1/',
            'https://www.instagram.com/p/EXAMPLE_DESSERT_EMBED_LINK2/'
        ],
        'Lain-lain': [
            'https://www.instagram.com/p/EXAMPLE_LAIN_LAIN_EMBED_LINK1/',
            'https://www.instagram.com/p/EXAMPLE_LAIN_LAIN_EMBED_LINK2/'
        ]
    };

    $(".dropdown-item").click(function() {
        var selectedValue = $(this).text();
        var emoji = '';
        if (selectedValue === 'Nasi') {
            emoji = String.fromCodePoint(0x1F35A); // Append rice bowl emoji when 'Nasi' is selected
        } else if (selectedValue === 'Daging') {
            emoji = String.fromCodePoint(0x1F969); // Append meat emoji when 'Daging' is selected
        } else if (selectedValue === 'Ayam') {
            emoji = String.fromCodePoint(0x1F357); // Append poultry leg emoji when 'Ayam' is selected
        } else if (selectedValue === 'Mee') {
            emoji = String.fromCodePoint(0x1F35C); // Append noodle bowl emoji when 'Mee' is selected
        } else if (selectedValue === 'Dessert') {
            emoji = String.fromCodePoint(0x1F368); // Append ice cream emoji when 'Dessert' is selected
        } else if (selectedValue === 'Thai') {
            emoji = String.fromCodePoint(0x1F35B); // Append curry emoji when 'Thai' is selected
        } else if (selectedValue === 'Western') {
            emoji = String.fromCodePoint(0x1F35F); // Append french fries emoji when 'Western' is selected
        } else if (selectedValue === 'Sup') {
            emoji = String.fromCodePoint(0x1F372); // Append stew emoji when 'Sup' is selected
        } else if (selectedValue === 'Minum Petang') {
            emoji = String.fromCodePoint(0x1F95F); // Append dumpling emoji when 'Minum Petang' is selected
        } else if (selectedValue === 'Ikan & Seafood') {
            emoji = String.fromCodePoint(0x1F364); // Append shrimp emoji when 'Ikan & Seafood' is selected
        } else if (selectedValue === 'Lain-lain') {
            emoji = String.fromCodePoint(0x1F32E); // Append taco emoji when 'Lain-lain' is selected
        }
        
        $("#selectedValue").text(selectedValue + ' ' + emoji);

        // Update video container
        var videoLinksArray = videoLinks[selectedValue];
        var embedHtml = videoLinksArray.map(link => 
            `<div class="col-lg-4 col-md-6 mb-2">
                <div class="embed-responsive embed-responsive-1by1">
                    <iframe src="${link}embed" frameborder="0" allowfullscreen class="embed-responsive-item video-iframe"></iframe>
                </div>
            </div>`).join('');
        $("#videoContainer").html('<div class="row">' + embedHtml + '</div>');
    });
});
