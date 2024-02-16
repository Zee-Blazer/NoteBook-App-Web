
// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function DivCont() {

    return (
        <div className="border-l-8 bg-white mt-4 shadow-md border-blue-500 p-4">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-4">
                {/* Title at the top left */}
                <h2 className="text-xl font-bold">Custom Div Header</h2>
                {/* Two Material UI Icons at the bottom left */}
                <div className="flex items-end">
                <div className="text-2xl mr-2">
                    <DeleteIcon />
                </div>
                <div className="text-2xl">
                    <FavoriteBorderIcon />
                </div>
                </div>
            </div>
            {/* Remaining Options at the bottom */}
            <div>
                {/* Add your content or options here */}
                <p>Option 1</p>
                <p>Option 2</p>
                <p>Option 3</p>
            </div>
        </div>
    )
}
