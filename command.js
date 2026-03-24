var commands = [];

function cmd(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.desc) info.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!info.category) data.category = 'misc';
    if(!info.filename) data.filename = "Not Provided";
    commands.push(data);
    return data;
}
module.exports = {
    cmd,
    AddCommand:cmd,
    Function:cmd,
    Module:cmd,
    commands,
};
   cmd.addCommand({
    pattern: "setgdp",
    desc: "To change Group DP",
    category: "group",
    filename: __filename
},
async(Void, citel, text) => {
    if (!citel.isGroup) return citel.reply("Ye command sirf groups mein kaam karegi.");
    if (!citel.quoted) return citel.reply("Kisi picture ko tag karke ye command likhen.");
    
    let mime = citel.quoted.mtype
    if (!/image/.test(mime)) return citel.reply("Ye image nahi hai, please image tag karen.");

    let img = await citel.quoted.download();
    await Void.updateProfilePicture(citel.chat, img);
    return citel.reply("Group DP successfully change ho gayi hai!");
});
