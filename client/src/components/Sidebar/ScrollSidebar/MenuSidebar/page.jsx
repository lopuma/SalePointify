const SidebarButton = () => {
	return (
		<div className="sticky top-[64px] z-10 md:hidden py-3 px-4 border-b border-gray-200 backdrop-blur-sm backdrop-saturate-200 bg-red-400/80 dark:bg-black/50">
			<div className="fixed-navigation-container">
				<div className="hidden navigation-area dropdown courses-closed">
					<div>
						<ul className="relative border-l border-gray-200 dark:border-gray-700">
							<li className="mb-10 ml-4">
								<div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-red-400 dark:border-gray-900 dark:bg-gray-700"></div>
								<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
									February 2022
								</time>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
									Application UI code in Tailwind CSS
								</h3>
								<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
									Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and
									pre-order E-commerce & Marketing pages.
								</p>
								<a
									href="#"
									className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
								>
									Learn more{' '}
									<svg
										className="w-3 h-3 ml-2"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</a>
							</li>
							<li className="mb-10 ml-4">
								<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
								<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
									March 2022
								</time>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
								<p className="text-base font-normal text-gray-500 dark:text-gray-400">
									All of the pages and components are first designed in Figma and we keep a parity between the two
									versions even as we update the project.
								</p>
							</li>
							<li className="ml-4">
								<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
								<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
									April 2022
								</time>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
									E-Commerce UI code in Tailwind CSS
								</h3>
								<p className="text-base font-normal text-gray-500 dark:text-gray-400">
									Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
								</p>
							</li>
						</ul>
					</div>
				</div>
				<button type="button" className="flex current f5 fw6 expand-button">
					<span>
						<svg height="24" viewBox="0 0 24 24" width="24">
							<g fill="#111111">
								<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
							</g>
						</svg>
					</span>
					<span>Menu</span>
				</button>
			</div>
		</div>
	)
}

export default SidebarButton
