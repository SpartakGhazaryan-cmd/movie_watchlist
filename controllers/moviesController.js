import { movies } from "../data/movies.js";


export const getMovies = (req,res) => { 
    return res.status(200).json({ok:true,count:movies.length,movies:movies});
};


export const getMovie = (req,res) => {
    const id = req.params.id
    const movie = movies.find(movie => movie.id == id);
    if(!movie){
       return res.status(404).json({ok:false,messege:"movie not found"})
    }

    return res.status(200).json
    


}

export const createMovie = (req,res) => {
    const newmovie = {id : movies.lenght + 2,title : req.body.title,year : req.body.year,reating : req.body.reating,watched : req.body.watched};

    movies.push(newmovie);
    res.status(201).json({ok : true,movie : newmovie});
}

export const updateMovie = (req,res) => {
    const movie = movies.find((u) => u.id === Number(req.params.id));

    if(!movies){
        return res.status(404).json({ok : true,messege : 'movie not found'});
    }

    movies.title = req.body.title;
    movies.year = req.body.year;
    movies.reating = req.body.reating;
    res.json({ok : true,movie });
};

export const toggleWatched = (req,res) => {
    const id = Number(req.params.id);

    const movie = movie.find(movie => movie.id === id);

    if(!movie){
        return res.status(404).json({ok : true,messege : 'movie not found'});
    }

    movie.watched = !movie.watched;

    return res.status(200).json({ok:true,movie:movie});
};


export const deleteMovie = (req,res) => {
   const index = movies.findIndex((u => u.id === Number(req.params.id)))

    const movie = movie.find(movie => movie.id === id);

    if(index === -1){
        return res.status(404).json({ok : true,messege : 'movie not found'});

    }

    movies.splice(index,1);
    res.json({ok : true,messege : 'user deleted'});
    
};

