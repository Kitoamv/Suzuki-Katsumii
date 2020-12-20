module.exports = {
    name: 'deadline',
    description: 'Add an upcoming deadline for a class.',
    run: async (client, msg, arg) => {
        msg.channel.send("Add a deadline for a class!");
    }
}
