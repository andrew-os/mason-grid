	//MASONRY GRID
	const resizeGridItem = (item) => {
		const grid = document.querySelector('.grid'),
		rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
		rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
		rowSpan = Math.ceil((item.querySelector('.grid-item__content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap))
		item.style.gridRowEnd = `span ${rowSpan}`
		},
		resizeAllGridItems = () => {
		const allItems = document.querySelectorAll('.grid-item')
		for (let x = 0; x < allItems.length; x += 1) {
		resizeGridItem(allItems[x])
		}
		}
		(() => {
		window.addEventListener('DOMContentLoaded', resizeAllGridItems)
		window.addEventListener('resize', resizeAllGridItems)
		})()
