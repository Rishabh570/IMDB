$(document).ready(() => {
    $('#search').on('submit',(e) => {
        let searchWrite;
        searchWrite = $('#searchWrite').val();
ShowMovies(searchWrite);
e.preventDefault();
    });
});

function ShowMovies(searchWrite){

    let url = 'http://www.omdbapi.com/?apikey=53fd6a67&s='+searchWrite ;
    $.ajax({

        url : url,
        dataType : 'JSONP',
        success : function (response) {
            console.log(response);
            let movies = response.Search ;
            let output = '';
            $.each(movies,(index,mov) => {
                output += `


                <div class = "col-sm-3">
                <div class="text-center">

                <img id="pos" onclick="SelectMovie('${mov.imdbID}') " src="${mov.Poster}" alt="Image not Available" >
              <h5>${mov.Title}</h5>
</div>
                </div>


                `;
            });
      $('.row').html(output);

        }


    });
}

function SelectMovie (id){
   sessionStorage.setItem('imdbID', id);
    window.location = 'info.html';
    return false;

}


function details() {
    let imdbID = sessionStorage.getItem('imdbID');

    let url = 'http://www.omdbapi.com/?apikey=53fd6a67&i'+ imdbID;
    $.ajax({

        url : url,
        dataType : 'JSONP',
        success : function (response) {
            console.log(response);


        }


    });

}


