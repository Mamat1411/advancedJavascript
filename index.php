<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Javascript</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- <h3>My Videos</h3>
    <ul>
        <li data-duration="15:27">Podomoro Technique</li>
        <li data-duration="11:18">ADVANCED JAVASCRIPT | Higher Order Functions</li>
        <li data-duration="21:40">ADVANCED JAVASCRIPT | This in Arrow Functions</li>
        <li data-duration="19:38">Scam Sites</li>
        <li data-duration="12:10">ADVANCED JAVASCRIPT | Arrow Functions</li>
        <li data-duration="20:43">ADVANCED JAVASCRIPT | Closures</li>
        <li data-duration="14:30">#ASKMRDIKA EP005</li>
        <li data-duration="26:38">ADVANCED JAVASCRIPT | Execution Context</li>
        <li data-duration="17:33">ADVANCED JAVASCRIPT | Prototype</li>
        <li data-duration="10:39">ADVANCED JAVASCRIPT | Object.Create</li>
        <li data-duration="17:31">ADVANCED JAVASCRIPT | Object (Revisited)</li>
        <li data-duration="14:25">5 Questioning Tips when Error Occurs</li>
    </ul>

    <h3>My Playlists</h3>
    <ol>
        <li>
            <h4>Advanced Javascript</h4>
            <p>Total Videos: <span class="total-videos"></span></p>
            <p>Total Duration: <span class="total-duration"></span></p>
        </li>
    </ol>
    <ul>
        <li class="name">Muhammad</li>
        <li class="name">Sari</li>
        <li class="name">Mamat</li>
    </ul>
    <ul>
        <li>Muhammad</li>
        <li>Sari</li>
        <li>Mamat</li>
    </ul>

    <h1 class="myName">Muhammad</h1> -->

    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <h1>Advanced Javascript API Exercise</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-md-8">
                <div class="input-group mb-3">
                    <input type="text" class="form-control input-keyword" placeholder="Search Movie">
                    <button class="btn btn-primary search-button" type="button">Search</button>
                </div>
            </div>
        </div>

        <div class="row movie-container">
            
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="movieDetailModal" tabindex="-1" aria-labelledby="movieDetailModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>