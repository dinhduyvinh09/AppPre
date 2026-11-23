const obj = JSON.parse($response.body || '{}');

obj.Attention = 'Hi! This was made by hnyb05.';

const FAR_FUTURE = '9999-01-09T10:10:14Z';
const PAST = '2005-01-09T10:10:14Z';

function makeSub(productId, amount, currency = 'VND') {
  return {
    auto_resume_date: null,
    display_name: productId,
    is_sandbox: true,
    ownership_type: 'PURCHASED',
    billing_issues_detected_at: null,
    management_url: 'https://apps.apple.com/account/subscriptions',
    period_type: 'normal',
    price: { amount, currency },
    expires_date: FAR_FUTURE,
    grace_period_expires_date: null,
    refunded_at: null,
    unsubscribe_detected_at: null,
    original_purchase_date: PAST,
    purchase_date: PAST,
    store: 'app_store',
    store_transaction_id: '2000001108724193',
  };
}

function makeEnt(productId) {
  return {
    grace_period_expires_date: null,
    purchase_date: PAST,
    product_identifier: productId,
    expires_date: FAR_FUTURE,
  };
}

obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

const goldProduct = 'locket_1600_1y';
obj.subscriber.subscriptions[goldProduct] = makeSub(goldProduct, 399000);
obj.subscriber.entitlements.Gold = makeEnt(goldProduct);

const filterPackProduct = 'com.locket.Locket.FilterPack_20Photos_500';
obj.subscriber.subscriptions[filterPackProduct] = makeSub(filterPackProduct, 0);
obj.subscriber.entitlements.effect_pack_20 = makeEnt(filterPackProduct);

$done({ body: JSON.stringify(obj) });
