import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />

			<Link to="/group-chat">
				<button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded">
					Group Chat
				</button>
			</Link>
			
			<LogoutButton />
		</div>
	);
};
export default Sidebar;