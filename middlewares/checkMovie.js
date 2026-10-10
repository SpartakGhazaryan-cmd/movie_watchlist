export const checkMovie = (req, res, next) => {
    const { title, year, rating } = req.body;

    if (
        typeof title !== "string" ||
        title.trim() === ""
    ) {
        return res.status(400).json({
            ok: false,
            message: "title is required"
        });
    }

    if (
        typeof year !== "number" ||
        year < 1900 ||
        year > 2026
    ) {
        return res.status(400).json({
            ok: false,
            message: "year must be between 1900 and 2026"
        });
    }

    if (
        typeof rating !== "number" ||
        rating < 1 ||
        rating > 10
    ) {
        return res.status(400).json({
            ok: false,
            message: "rating must be between 1 and 10"
        });
    }

    next();
};