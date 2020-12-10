import {useState} from 'react';

function usePaging(items, itemsPerPage) {
	const [currentPage, setCurrentPage] = useState(1);
	const maxPage = Math.ceil(items / itemsPerPage);

	function prevPage() {
		setCurrentPage((currentPage) => Math.max(1, currentPage - 1));
	}

	function nextPage() {
		setCurrentPage((currentPage) => Math.min(maxPage, currentPage + 1));
	}

	function currentStart() {
		return (currentPage - 1) * itemsPerPage;
	}

	function currentEnd() {
		return Math.min(items.length, currentPage * itemsPerPage);
	}

	function currentItems() {
		const start = (currentPage - 1) * itemsPerPage;
		return items.slice(start, start + itemsPerPage);
	}

	return {
		currentItems,
		currentPage,
		currentStart,
		currentEnd,
		maxPage,
		prevPage,
		nextPage,
	};
}

export default usePaging;
