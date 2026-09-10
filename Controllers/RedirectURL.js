import { URLs } from "../Models/url.js";

export const RedirectURL = async(req,res) => {
    const { shortId } = req.params;
    try{
        const resUrls = await URLs.find({ shortID: shortId});
        const element =resUrls[0];
        if(!element) {
            return res.status(404).json({
                ok:false,
                message:"URL not found"
            });
        }
       return res.redirect(element.longUrl);
        // console.log(element);
    }catch(err) {
        console.log(err);
        res.status(500).json({
            ok:false,
            message:"Internal server error"
        });
    }
};