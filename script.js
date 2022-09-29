function createUser(userName) {
  let following = [];
  let followers = [];
  let user = {
    userName,
    following,
    addFollowing: function (userName) {
      following.push(userName);
      userName.followers.push(this);
    },
    followers,
    addFollower: function (userName) {
      followers.push(userName);
      userName.following.push(this);
    },
    sendMessage: function (message) {
      followers.forEach((userName) => {
        userName.getMessage(message, userName, this.userName);
      });
    },

    getMessage: function (message, userName, fromUser) {
      console.log(
        "Hey " +
          userName.userName +
          " you get this message: " +
          message +
          " from: " +
          fromUser
      );
    },
  };
  return user;
}

let gal = new createUser("gal");
let dudu = new createUser("dudu");
let boby = new createUser("boby");
let hadar = new createUser("hadar");
let amit = new createUser("amit");
let stav = new createUser("stav");
let adi = new createUser("adi");
let elad = new createUser("elad");
let nir = new createUser("nir");

gal.addFollowing(dudu);
gal.addFollowing(boby);
gal.addFollowing(hadar);

gal.addFollower(amit);
gal.addFollower(stav);
gal.addFollower(adi);
gal.addFollower(elad);

elad.addFollower(gal);

gal.sendMessage("test"); // only gal's follower get this message (smit,stav,adi,elad)

elad.sendMessage("arak"); //only elad's follwer get this message (gal)

adi.sendMessage("how are you?"); // no follower for adi nobody get this message

dudu.sendMessage("hey :D"); // only dudu's follower get this message (gal)
