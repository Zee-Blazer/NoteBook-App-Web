
// Icons
// import { Search, Add, Favorite, Settings } from '@material-ui/icons';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';

// Component
import DivCont from './div-cont';

export default function Notes() {

    return (
        <div className="lg:flex h-screen bg-gray-100 block">
      {/* Left Container (20%) */}
      <div className="lg:w-1/5 p-4 border-r border-gray-300 overflow-y-auto">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
          <button className="ml-2 p-2 bg-blue-500 text-white rounded-full">
            <SearchIcon />
          </button>
        </div>
        {/* Iconed Options */}
        <div className="flex items-center space-x-4">
          {/* Add your icon options here */}
          <div className="text-2xl">⚙️</div>
          <div className="text-2xl">📁</div>
          <div className="text-2xl">🔒</div>
        </div>
      </div>

      {/* Right Container (75%) */}
      <div className="lg:w-4/5 p-4">
        {/* Top Flex (Left Icon + Right Divs) */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {/* Left Icon (Material UI Icon) */}
            <button className="ml-2 p-2 bg-blue-500 text-white rounded-full">
                <AddIcon />
            </button>
          </div>
          {/* Two Right Divs */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl">🌐</div>
            <div className="text-2xl">📊</div>
          </div>
        </div>
        {/* Other Divs Below Top Flex */}
        <div className="">
          {/* Add your content divs here */}
          <DivCont />
          <DivCont />
          <DivCont />
          <DivCont />
          <DivCont />
        </div>
      </div>
    </div>
    )
}
