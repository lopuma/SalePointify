import BackdropSidebar from './BackdropSidebar/page'
import ScrollSidebar from './ScrollSidebar/page'
import ToggleSidebar from './ToggleSidebar/page'

function Sidebar () {
	return (
		<>
			<BackdropSidebar />
			<ToggleSidebar />
			<ScrollSidebar />
		</>
	)
}

export default Sidebar
