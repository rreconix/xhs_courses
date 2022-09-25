import { courses } from "./courses.js"

function createBranch(courses) {
	let branch_html = document.createElement("ol")

	if (courses.length > 1) {
		const ol_container = document.createElement("ol")

		for (const course of courses) {
			if ("nestedCourses" in course) {
				const li = document.createElement("li")
				const a = document.createElement("a")
				a.textContent = course.name

				li.appendChild(a)
				li.appendChild(createBranch(course.nestedCourses))
				ol_container.appendChild(li)
			} else {
				const li = document.createElement("li")
				const a = document.createElement("a")
				a.textContent = course.name

				li.appendChild(a)
				ol_container.appendChild(li)
			}
		}

		return ol_container
	} else {
		const ol_container = document.createElement("ol")

		const li = document.createElement("li")
		const a = document.createElement("a")
		a.textContent = courses[0].name

		li.appendChild(a)

		if ("nestedCourses" in courses[0]) {
			const nested = createBranch(courses[0].nestedCourses)
			li.appendChild(nested)
			ol_container.appendChild(li)

			return ol_container
		} else {
			branch_html.appendChild(li)
			return branch_html
		}
	}
}


function returnToMainHeaders() {
	createTree(courses)
}

function highlightNodePath(node) {
	if (node.classList.contains("highlighted")) return
	const parentATag = node.parentNode.parentNode.parentNode.children[0] || false
	node.classList.add("highlighted")
	
	if (parentATag && parentATag.tagName === "A") {
		highlightNodePath(parentATag)
	} else {
		return
	}
}

const tree = document.querySelector(".tree")

function removeHighlightedTags() {
	const nodePaths = tree.querySelectorAll("a")
	nodePaths.forEach((node) => node.classList.remove("highlighted"))
}

function removeXaverianMainHeader() {
	const branchWithoutHeader = tree.querySelector("li ol")
	tree.innerHTML = ""
	tree.appendChild(branchWithoutHeader)
}

function createBranchForMainHeaders(e, header) {
	removeXaverianMainHeader()

	const thisMainHeader = e.target.parentNode
	const otherMainheaders = [...document.querySelectorAll(".main-header")]
		.map((headerText) => headerText.parentNode)
		.filter((headerNode) => headerNode !== thisMainHeader)
	otherMainheaders.forEach((branch) => branch.remove())

	const backButton = document.createElement("button")
	backButton.className = "back"
	backButton.textContent = "Back"
	backButton.addEventListener("click", returnToMainHeaders)

	thisMainHeader.appendChild(backButton)

	if ("nestedCourses" in header) {
		const branch = createBranch(header.nestedCourses)
		branch.className = "branch"
		thisMainHeader.appendChild(branch)

		branch.querySelectorAll("a").forEach((node) => {
			node.addEventListener("mousemove", () => highlightNodePath(node))
			node.addEventListener("mouseleave", removeHighlightedTags)
		})
	}
}

function createXaverianHeader() {
	const li = document.createElement("li")

	const a = document.createElement("a")
	a.textContent = "Xaverian"

	const ol = document.createElement("ol")
	ol.style.width = "100%"

	li.appendChild(a)
	li.appendChild(ol)

	return li
}

function createTree(courses) {
	tree.innerHTML = ""
	const ol = document.createElement("ol")
	tree.appendChild(ol)
	ol.appendChild(createXaverianHeader())

	const mainHeadersContainer = tree.querySelector("ol li ol")

	for (const main_header of courses.nestedCourses) {
		//creating each main header subject
		const li = document.createElement("li")

		const a = document.createElement("a")
		a.textContent = main_header.name
		a.addEventListener("click", (e) => createBranchForMainHeaders(e, main_header))
		a.className = "main-header"

		li.appendChild(a)

		mainHeadersContainer.appendChild(li)
	}
}

createTree(courses)
