/******************************

脚本名称: 灵感-记录灵感和兴趣
软件版本：1.0.1
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]


^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/linggan.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 6470180367,
    "receipt_creation_date" : "2023-11-06 04:47:31 Etc/GMT",
    "bundle_id" : "top.ideaapp.ideaiOS",
    "original_purchase_date" : "2023-11-06 04:44:17 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1699245965000",
        "expires_date" : "2099-11-09 04:46:05 Etc/GMT",
        "expires_date_pst" : "2099-11-08 20:46:05 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "190001783881934",
        "is_trial_period" : "true",
        "original_transaction_id" : "190001783881934",
        "purchase_date" : "2023-11-06 04:46:05 Etc/GMT",
        "product_id" : "top.ideaapp.ideaiOS.membership.onemonth",
        "original_purchase_date_pst" : "2023-11-05 20:46:07 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1699245967000",
        "web_order_line_item_id" : "190000806839086",
        "expires_date_ms" : "4092599349000",
        "purchase_date_pst" : "2023-11-05 20:46:05 America/Los_Angeles",
        "original_purchase_date" : "2023-11-06 04:46:07 Etc/GMT"
      }
    ],
    "adam_id" : 6470180367,
    "receipt_creation_date_pst" : "2023-11-05 20:47:31 America/Los_Angeles",
    "request_date" : "2023-11-06 04:47:32 Etc/GMT",
    "request_date_pst" : "2023-11-05 20:47:32 America/Los_Angeles",
    "version_external_identifier" : 861213518,
    "request_date_ms" : "1699246052531",
    "original_purchase_date_pst" : "2023-11-05 20:44:17 America/Los_Angeles",
    "application_version" : "1",
    "original_purchase_date_ms" : "1699245857000",
    "receipt_creation_date_ms" : "1699246051000",
    "original_application_version" : "1",
    "download_id" : 502930213183851531
  },
  "pending_renewal_info" : [
    {
      "product_id" : "top.ideaapp.ideaiOS.membership.onemonth",
      "original_transaction_id" : "190001783881934",
      "auto_renew_product_id" : "top.ideaapp.ideaiOS.membership.onemonth",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1699245965000",
      "expires_date" : "2099-11-09 04:46:05 Etc/GMT",
      "expires_date_pst" : "2099-11-08 20:46:05 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "190001783881934",
      "is_trial_period" : "true",
      "original_transaction_id" : "190001783881934",
      "purchase_date" : "2023-11-06 04:46:05 Etc/GMT",
      "product_id" : "top.ideaapp.ideaiOS.membership.onemonth",
      "original_purchase_date_pst" : "2023-11-05 20:46:07 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "21402662",
      "original_purchase_date_ms" : "1699245967000",
      "web_order_line_item_id" : "190000806839086",
      "expires_date_ms" : "4092599349000",
      "purchase_date_pst" : "2023-11-05 20:46:05 America/Los_Angeles",
      "original_purchase_date" : "2023-11-06 04:46:07 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
