export const courses = {
	name: "Xaverian",
	nestedCourses: [
		{
			name: "Algebra 1",
			gradeLevel: 9,
			nestedCourses: [
				{
					name: "Geometry",
					gradeLevel: 10,
					nestedCourses: [
						{
							name: "Algebra II/Trig",
							gradeLevel: 11,
							nestedCourses: [
								{
									name: "Pre-calc",
									gradeLevel: 12,
								},
								{
									name: "AP Pre-calc",
									gradeLevel: 12,
								},
								{
									name: "SJU Pre-calc",
									gradeLevel: 12,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "Medical",
			gradeLevel: 10,
			nestedCourses: [
				{
					name: "test",
					nestedCourses: [
						{
							name: "test1",
						},
						{
							name: "test2",
						},
						{
							name: "test3",
							nestedCourses: [
								{
									name: "test4",
								},
								{
									name: "test5",
								},
							],
						},
						{
							name: "test6",
						},
					],
				},
				{
					name: "whattt",
					nestedCourses: [
						{
							name: "twht",
						},
					],
				},
				{
					name: "Hi",
					nestedCourses: [
						{
							name: "Statistics",
						},
						{
							name: "Brother",
							nestedCourses: [
								{
									name: "Dog",
								},
							],
						},
					],
				},
			],
		},
		{
			name: "idk",
		},
		{
			name: "asdasd",
			gradeLevel: 9,
			nestedCourses: [
				{
					name: "test8",
				},
				{
					name: "test9",
					nestedCourses: [
						{
							name: "asdasdasfsdf",
						},

						{
							name: "asdfesg",
						},
					],
				},
			],
		},
	],
}
