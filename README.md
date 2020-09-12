# SteemCatcher

SteemCatcher connects to the **SteemCatcher** server to catch the actions that occur on the Steem blockchain.

## Installation

clone repository and then:
```
npm install
```

## Actions to listening

 - post
 - comment
 - comment_options
 - delete_comment
 - vote

 - transfer
 - transfer_to_vesting

 
 - custom_json

 - claim_account
 - created_claimed_account
 - account_update
 - claim_reward_balance
 - delegate_vesting_shares

 - feed_publish

 - limit_order_create
 - limit_order_cancel

## Examples

To catch votes:
```
ioSteem.on("vote", data => {
    console.log(data);
});
```
*result:*

voter: data.voter

author: data.author

permlink: data.permlink

weight: data.weight


To catch post (no comments):
```
ioSteem.on("post", data => {
    console.log(data);
});
```
