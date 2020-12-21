module.exports = {
    testInputs: [
        [
            {
                name:"jon",
                age: "27"
            },
            {
                name:"jeff",
                age: "26"
            },
        ],[
            {
                age:1
            },
            {
                age:3
            },
            {
                age:2
            },
            {
                age:4
            },
        ]
    ],
    testOutputs: [
        [
            {
                name:"jeff",
                age: "26"
            },
            {
                name:"jon",
                age: "27"
            },
        ],
        [
            {
                age:1
            },
            {
                age:2
            },
            {
                age:3
            },
            {
                age:4
            },
        ]

    ]
}