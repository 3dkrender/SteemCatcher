var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io-client');
var ioSteem = io("http://steemcatcher.net");

/**
 * Listening to the server and catching the actions.
 * 
 * Actions to listening:
 *      post
 *      comment
 *      comment_options
 *      delete_comment
 *      vote
 * 
 *      transfer
 *      transfer_to_vesting
 * 
 *      custom_json
 * 
 *      claim_account
 *      created_claimed_account
 *      account_update
 *      claim_reward_balance
 *      delegate_vesting_shares
 * 
 *      feed_publish
 * 
 *      limit_order_create
 *      limit_order_cancel
 *      
 */
ioSteem.on("vote", data => {
    console.log(data);
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});