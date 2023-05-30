(function (window, k) {
    if (!window.AppstleIncluded && (!urlIsProductPage() || 'V1' === 'V1')) {
      window.AppstleIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
            script.async = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
            document.getElementsByTagName("head")[0].appendChild(script)
      };


      appstleLoadScript("https://cdn.shopify.com/s/files/1/0563/4464/1636/t/28/assets/appstle-subscription.js?v=1683770905");


      window.RS = Window.RS || {};
      RS.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "#MainContent > div > div > div.grid__item.medium-up--two-thirds > h2",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE",
            "cartRowSelector": "",
            "cartLineItemSelector": "",
            "cartLineItemPerQuantityPriceSelector": "",
            "cartLineItemTotalPriceSelector": "",
            "cartLineItemSellingPlanNameSelector": "",
            "cartSubTotalSelector" : "",
            "cartLineItemPriceSelector": "",
        },
        "enableCartWidgetFeature": "false",
        "useUrlWithCustomerId": "false",
        "atcButtonSelector": "div.payment-buttons",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "wakigo-freeze-dried-products.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Purchase Options",
        "manageSubscriptionButtonText": "Manage Subscription",
        "subscriptionOptionText": "Subscribe and Save",
        "sellingPlanSelectTitle": "DELIVERY FEQUENCY",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Subscription Detail",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your subscriptions<\/strong><br\/><br\/>Skip, reschedule, edit, or cancel deliveries anytime, based on your needs.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{totalPrice}} ( Price for every delivery: {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Subscription",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your subscriptions. Please use the same email address that you used to buy the subscription.",
        "orderStatusManageSubscriptionButtonText": "Manage your subscription",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "nonMemberOnlySellingPlansJson": {},
        "sellingPlansJson": [{"frequencyCount":1,"frequencyInterval":"MONTH","billingFrequencyCount":1,"billingFrequencyInterval":"MONTH","frequencyName":"Monthly Delivery - Save 10%","discountOffer":10.0,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/3033071716","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"maxCycles":999,"minCycles":1,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/3033071716","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"formFieldJson":"null","appstleCycles":[]},{"frequencyCount":2,"frequencyInterval":"MONTH","billingFrequencyCount":2,"billingFrequencyInterval":"MONTH","frequencyName":"Bimonthly Delivery - Save 5%","discountOffer":5.0,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/3033497700","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"maxCycles":999,"minCycles":1,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/3033497700","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"formFieldJson":"null","appstleCycles":[]},{"frequencyCount":1,"frequencyInterval":"MONTH","billingFrequencyCount":1,"billingFrequencyInterval":"MONTH","frequencyName":"Monthly Delivery - Save 10%","discountOffer":10.0,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/3033530468","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"maxCycles":999,"minCycles":1,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/3033530468","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"formFieldJson":"null","appstleCycles":[]},{"frequencyCount":2,"frequencyInterval":"MONTH","billingFrequencyCount":2,"billingFrequencyInterval":"MONTH","frequencyName":"Bimonthly Delivery - Save 5%","discountOffer":5.0,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/3033563236","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"maxCycles":999,"minCycles":1,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/3033563236","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"formFieldJson":"null","appstleCycles":[]}],
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": false,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{sellingPlanPrice}}\/delivery)",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : " {{totalPrice}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/subscriptions' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Subscription<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/subscriptions",
        "appstlePlanId": 3,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "widgetEnabledOnSoldVariant": "false",
        "switchRadioButtonWidget": false,
        "appstlePlanName": "BUSINESS",
        "appstlePlanFeatures": {"accessSplitContract":true,"enableExternalApi":false,"enableQuickActions":false,"enableDunningManagement":true,"enableAutoSync":false,"accessSubscriptionActivityLogs":true,"webhookAccess":false,"accessBundling":true,"analytics":true,"enableCustomEmailHtml":true,"accessAppstleMenu":false,"enableShippingProfiles":true,"accessKlaviyoContactSync":true,"accessCustomWidgetLocations":true,"accessAdvanceSubscriptionPlanOptions":true,"enableSmsAlert":false,"accessOneTimeProductUpsells":true,"accessQuickCheckout":true,"enableCustomEmailDomain":false,"enableSummaryReports":true,"subscriptionCount":10000,"accessManualSubscriptionCreation":true,"enableSubscriptionManagement":true,"enableAutomation":false,"enableBundling":false,"accessResendEmail":true,"enableCartWidget":false,"accessDiscountOnCancellationAttempt":true,"accessWidgetDesignOptions":true,"enableCancellationManagement":true,"accessSubscriberLoyaltyFeatures":true,"enableWidgetPlacement":true,"enableIntegrations":true,"enableCustomerPortalSettings":true,"enableProductSwapAutomation":true,"enableAdvancedSellingPlans":true,"accessBuildABox":false},
        "formMappingAttributeName": "",
        "formMappingAttributeSelector": "",
        "quickViewModalPollingSelector": ".btn.btn--full.add-to-cart",
        "scriptLoadDelay": "0",
        "formatMoneyOverride": "false",
        "appstle_app_proxy_path_prefix": "apps\/subscriptions",
        "updatePriceOnQuantityChange": "",
        "widgetParentSelector": "",
        "quantitySelector": "",
        "enableAddJSInterceptor": "false",
        "reBuyEnabled": "false",
        "loyaltyDetailsLabelText": "",
        "loyaltyPerkDescriptionText": "",
        "widgetTemplateHtml": `{% raw %}{% endraw %}`,
        "bundle": {},
        "labels": "{\"appstle.subscription.wg.yearsFrequencyTextV2\":\"Years\",\"appstle.subscription.wg.weekFrequencyTextV2\":\"Week\",\"appstle.subscription.wg.noSubscriptionLabelTextV2\":\"No Subscription\",\"appstle.subscription.wg.cancelAnytimeLabelTextV2\":\"Cancel Anytime\",\"appstle.subscription.wg.oneTimePurchaseTextV2\":\"One Time Purchase\",\"appstle.subscription.wg.loyaltyPerkDescriptionTextV2\":\"{{#isDiscountTypeFreeProduct}}<div style='display: flex;'><div style='height: 60px; width: 60px; flex-shrink: 0; margin-right: 10px;'><img style='width: 100%' src={{{featured_image}}}><\/img><\/div><div>After {{{billingCycleBlock}}} orders,<span style='color: #ffc000;font-weight: 700;';> get a FREE {{freeProductName}} <\/span><\/div><div>{{\/isDiscountTypeFreeProduct}}{{#isDiscountTypePercentage}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{discount}}}% OFF your entire order<\/span><\/span>.{{\/isDiscountTypePercentage}}{{#isDiscountTypeShipping}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>shipping at {{{formatDiscountedPrice}}}<\/span><\/span>.{{\/isDiscountTypeShipping}}{{#isDiscountTypeFixed}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{formatDiscountedPrice}}} OFF your entire order<\/span><\/span>.{{\/isDiscountTypeFixed}}\",\"appstle.subscription.wg.unsubscribeFrequencyTextV2\":\"unsubscribe\",\"appstle.subscription.wg.weeksFrequencyTextV2\":\"Weeks\",\"appstle.subscription.wg.weeklyLabelTextV2\":\"Weekly\",\"appstle.subscription.wg.oneTimeFrequencyTextV2\":\"One Time\",\"appstle.subscription.wg.dayFrequencyTextV2\":\"day\",\"appstle.subscription.wg.allowFulfilmentCountViaPropertiesV2\":\"true\",\"appstle.subscription.wg.monthsFrequencyTextV2\":\"Months\",\"appstle.subscription.wg.subscribeAndSaveInitalV2\":\"Subscribe & save\",\"appstle.subscription.wg.deliveryEveryFrequencyTextV2\":\"Delivery Every\",\"appstle.subscription.wg.offFrequencyTextV2\":\"Off\",\"appstle.subscription.wg.daysFrequencyTextV2\":\"Days\",\"appstle.subscription.wg.yearFrequencyTextV2\":\"Year\",\"appstle.subscription.wg.monthlyLabelTextV2\":\"Monthly\",\"appstle.subscription.wg.prepayLabelTextV2\":\"Prepay\",\"appstle.subscription.wg.subscribeAndSaveSuccessV2\":\"Subscribe success\",\"appstle.subscription.wg.monthFrequencyTextV2\":\"Month\",\"appstle.subscription.wg.selectDeliverOptionV2\":\"select deliver option\",\"appstle.subscription.wg.yearlyLabelTextV2\":\"Yearly\"}",
        "css": {
            "appstle_subscription_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_subscription_wrapper": {
                "border-width": "",
                "border-color": "#10b729",
            },

            "appstle_circle": {
                "border-color": "#10b729",
            },

            "appstle_dot": {
                "background-color": "#10b729",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "none",
                "border-color": "",
                "border-radius": "-5",
            },

            "tooltip_subscription_svg": {
                "fill": "#10b729",
            },

            "appstle_tooltip": {
                "color": "#ffffff",
                "background-color": "#10b729",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "#10b729",
            },

            "appstle_subscription_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "#appstle_subscription_widget0 .appstle_subscription_wrapper {\n    border: 2.0px solid #10b729!important;\n}",
            "elementCSS": "[]",
            "customerPortalCss": "#root > div > div > div > div > div > div > div > div.as-px-4.as-py-5.sm\\:as-px-6.as-flex.as-justify-between.as-flex-col.md\\:as-flex-row.as-items-center > a > button, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-billing > button.as-w-full.as-items-center.as-px-2.as-py-1.lg\\:as-px-4.lg\\:as-py-2.as-border.as-border-transparent.as-rounded-md.as-shadow-sm.as-text-sm.as-font-medium.as-text-white.as-bg-indigo-600.hover\\:as-bg-indigo-700.focus\\:as-outline-none.focus\\:as-ring-2.focus\\:as-ring-offset-2.focus\\:as-ring-indigo-500.as-button.as-button--primary.as-edit-billing_primary-button.disabled\\:as-opacity-75.disabled\\:as-cursor-not-allowed.disabled\\:as-bg-indigo-900, #headlessui-dialog-8 > div > div.as-relative.as-inline-block.as-align-bottom.as-bg-white.as-rounded-lg.as-text-left.as-overflow-hidden.as-shadow-xl.as-transform.as-transition-all.sm\\:as-my-8.sm\\:as-align-middle.sm\\:as-max-w-xl.sm\\:as-max-h-2xl.sm\\:as-w-full.as-opacity-100.as-translate-y-0.sm\\:as-scale-100 > div > div.as-border-t.as-px-4.as-py-3.sm\\:as-px-6.as-grid.as-gap-2.as-modal-footer.as-modal-cta-wrapper > button.as-w-full.as-inline-flex.as-items-center.as-justify-center.as-rounded-md.as-border.as-border-transparent.as-shadow-sm.as-px-4.as-py-2.as-bg-indigo-600.as-text-base.as-font-medium.as-text-white.hover\\:as-bg-indigo-700.focus\\:as-outline-none.focus\\:as-ring-2.focus\\:as-ring-offset-2.focus\\:as-ring-indigo-500.sm\\:as-w-auto.sm\\:as-text-sm.disabled\\:as-opacity-75.disabled\\:as-cursor-not-allowed.disabled\\:as-bg-indigo-600.disabled\\:as-text-white.as-button.as-button--primary.as-button_modal-primary{\n    background: #10b729 !important;\n}\n#root > div > div, #root > div > div > div > div > div > div > div > div.as-px-4.as-py-5.sm\\:as-px-6.as-flex.as-justify-between.as-flex-col.lg\\:as-flex-row, #root > div > div > div > div > div > div > div > div.as-border-t.as-border-b.as-border-gray-200.as-px-4.as-py-5.sm\\:as-px-6, #root > div > div > div > div > div > div > div > div.as-px-4.as-py-5.sm\\:as-px-6.as-flex.as-justify-between.as-flex-col.md\\:as-flex-row.as-items-center, #headlessui-tabs-tab-1, #headlessui-tabs-tab-2, #headlessui-tabs-tab-3, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-8 > div > div > div.as-flex.as-justify-between.as-items-center.as-mb-1.as-product-details_header, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-billing, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div:nth-child(2) > div, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-shipping, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-payment, div.as-px-4.as-py-5.sm\\:as-px-6.as-flex.as-justify-between, div.as-border-t.as-border-b.as-border-gray-200.as-px-4.as-py-5.sm\\:as-px-6, #headlessui-dialog-title-12, #headlessui-dialog-8 > div > div.as-relative.as-inline-block.as-align-bottom.as-bg-white.as-rounded-lg.as-text-left.as-overflow-hidden.as-shadow-xl.as-transform.as-transition-all.sm\\:as-my-8.sm\\:as-align-middle.sm\\:as-max-w-xl.sm\\:as-max-h-2xl.sm\\:as-w-full.as-opacity-100.as-translate-y-0.sm\\:as-scale-100 > div > div.as-px-4.as-pt-5.as-pb-4.sm\\:as-p-6.sm\\:as-pb-4.as-modal-body, #headlessui-dialog-8 > div > div.as-relative.as-inline-block.as-align-bottom.as-bg-white.as-rounded-lg.as-text-left.as-overflow-hidden.as-shadow-xl.as-transform.as-transition-all.sm\\:as-my-8.sm\\:as-align-middle.sm\\:as-max-w-xl.sm\\:as-max-h-2xl.sm\\:as-w-full.as-opacity-100.as-translate-y-0.sm\\:as-scale-100 > div > div.as-border-t.as-px-4.as-py-3.sm\\:as-px-6.as-grid.as-gap-2.as-modal-footer.as-modal-cta-wrapper{\n    background: black !important;\n}\n#root > div > div > div > div > div > div.as-flex.as-items-center.as-my-8.as-subscription-detail-header > p, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-8 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-card.as-product-details > div > div.as-relative.as-overflow-x-auto.as-product-details-table-wrapper > table > tbody > tr.dark\\:as-bg-gray-800.dark\\:as-border-gray-700.as-bg-gray-50.dark\\:hover\\:as-bg-gray-600.as-hidden.md\\:as-table-row.as-delivery-price > td, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-8 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-card.as-product-details > div > div.as-relative.as-overflow-x-auto.as-product-details-table-wrapper > table > tbody > tr.dark\\:as-bg-gray-800.dark\\:as-border-gray-700.as-bg-gray-50.dark\\:hover\\:as-bg-gray-600.as-hidden.md\\:as-table-row.as-subtotal-price > td, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-8 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-card.as-product-details > div > div.as-relative.as-overflow-x-auto.as-product-details-table-wrapper > table > tbody > tr.as-bg-white.as-border-b.dark\\:as-bg-gray-800.dark\\:as-border-gray-700.hover\\:as-bg-gray-50.dark\\:hover\\:as-bg-gray-600 > th > div > div.as-col-span-10 > p:nth-child(2), #root > div > div > div > div > div > div > div > div.as-px-4.as-py-5.sm\\:as-px-6.as-flex.as-justify-between.as-flex-col.lg\\:as-flex-row > h3, #root > div > div > div > div > div > div > div > div.as-px-4.as-py-5.sm\\:as-px-6.as-flex.as-justify-between.as-flex-col.lg\\:as-flex-row > p:nth-child(2), #root > div > div > div > div > div > div > div > div.as-px-4.as-py-5.sm\\:as-px-6.as-flex.as-justify-between.as-flex-col.lg\\:as-flex-row > p:nth-child(3), #root > div > div > div > div > div > div > div > div.as-px-4.as-py-5.sm\\:as-px-6.as-flex.as-justify-between.as-flex-col.md\\:as-flex-row.as-items-center > p, #root > div > div > div > div > div > div > div > div.as-border-t.as-border-b.as-border-gray-200.as-px-4.as-py-5.sm\\:as-px-6 > div > div > div.as-col-span-3 > p.as-text-sm.as-text-gray-800.as-mb-2, #headlessui-tabs-tab-1, #headlessui-tabs-tab-2, #headlessui-tabs-tab-3, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-8 > div > div > div.as-flex.as-justify-between.as-items-center.as-mb-1.as-product-details_header > p,#headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-billing > h3, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-billing > div > p, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div:nth-child(2) > div > div > p,#headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div:nth-child(2) > div > h3, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-shipping > div.as-flex.as-justify-between.as-mb-2 > p.as-text-sm.as-text-gray-500.as-card_title.as-edit-shipping_title, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-shipping > div.as-card_data.as-edit-shipping_data > p.as-text-sm.as-text-gray-800.as-pt-3.as-shipping-option, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-shipping > div.as-card_data.as-edit-shipping_data > p.as-text-sm.as-text-gray-800.as-pt-3.as-shipping-option > span, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-shipping > div.as-card_data.as-edit-shipping_data > p.as-text-sm.as-text-gray-900.as-pt-2.as-font-medium.as-shipping-address-title, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-shipping > div.as-card_data.as-edit-shipping_data > address, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-payment > div > p.as-text-sm.as-text-gray-500.as-card_title.as-edit-payment_title, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-payment > p, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-8 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-card.as-product-details > div > div.as-relative.as-overflow-x-auto.as-product-details-table-wrapper > table > tbody > tr.as-bg-white.as-border-b.dark\\:as-bg-gray-800.dark\\:as-border-gray-700.hover\\:as-bg-gray-50.dark\\:hover\\:as-bg-gray-600 > th > div > div.as-col-span-10 > p.as-text-sm.as-text-gray-800.as-mb-2, div.as-px-4.as-py-5.sm\\:as-px-6.as-flex.as-justify-between > h3, div.as-border-t.as-border-b.as-border-gray-200.as-px-4.as-py-5.sm\\:as-px-6 > div > div > div.as-col-span-3 > p.as-text-sm.as-text-gray-800.as-mb-2, div.as-border-t.as-border-b.as-border-gray-200.as-px-4.as-py-5.sm\\:as-px-6 > div > div > div.as-col-span-3 > p:nth-child(2), div.as-border-t.as-border-b.as-border-gray-200.as-px-4.as-py-5.sm\\:as-px-6 > div > div > div.as-col-span-3 > p:nth-child(2) > span, div.as-border-t.as-border-b.as-border-gray-200.as-px-4.as-py-5.sm\\:as-px-6 > div > div > div.as-col-span-3 > p:nth-child(3), #headlessui-tabs-panel-5 > div:nth-child(1) > div.as-border-t.as-border-b.as-border-gray-200.as-px-4.as-py-5.sm\\:as-px-6 > div > div > div.as-col-span-3 > p:nth-child(4) > span, div.as-border-t.as-border-b.as-border-gray-200.as-px-4.as-py-5.sm\\:as-px-6 > div > div > div.as-col-span-3 > p:nth-child(3) > span, #headlessui-tabs-panel-5 > div:nth-child(1) > div.as-border-t.as-border-b.as-border-gray-200.as-px-4.as-py-5.sm\\:as-px-6 > div > div > div.as-col-span-3 > p:nth-child(4), #headlessui-dialog-title-12, #headlessui-dialog-8 > div > div.as-relative.as-inline-block.as-align-bottom.as-bg-white.as-rounded-lg.as-text-left.as-overflow-hidden.as-shadow-xl.as-transform.as-transition-all.sm\\:as-my-8.sm\\:as-align-middle.sm\\:as-max-w-xl.sm\\:as-max-h-2xl.sm\\:as-w-full.as-opacity-100.as-translate-y-0.sm\\:as-scale-100 > div > div.as-px-4.as-pt-5.as-pb-4.sm\\:as-p-6.sm\\:as-pb-4.as-modal-body, #headlessui-dialog-8 > div > div.as-relative.as-inline-block.as-align-bottom.as-bg-white.as-rounded-lg.as-text-left.as-overflow-hidden.as-shadow-xl.as-transform.as-transition-all.sm\\:as-my-8.sm\\:as-align-middle.sm\\:as-max-w-xl.sm\\:as-max-h-2xl.sm\\:as-w-full.as-opacity-100.as-translate-y-0.sm\\:as-scale-100 > div > div.as-px-4.as-pt-5.as-pb-4.sm\\:as-p-6.sm\\:as-pb-4.as-modal-body > div > div:nth-child(2) > p, #headlessui-dialog-8 > div > div.as-relative.as-inline-block.as-align-bottom.as-bg-white.as-rounded-lg.as-text-left.as-overflow-hidden.as-shadow-xl.as-transform.as-transition-all.sm\\:as-my-8.sm\\:as-align-middle.sm\\:as-max-w-xl.sm\\:as-max-h-2xl.sm\\:as-w-full.as-opacity-100.as-translate-y-0.sm\\:as-scale-100 > div > div.as-px-4.as-pt-5.as-pb-4.sm\\:as-p-6.sm\\:as-pb-4.as-modal-body > div > div:nth-child(2) > div.as-flex > p, #headlessui-dialog-8 > div > div.as-relative.as-inline-block.as-align-bottom.as-bg-white.as-rounded-lg.as-text-left.as-overflow-hidden.as-shadow-xl.as-transform.as-transition-all.sm\\:as-my-8.sm\\:as-align-middle.sm\\:as-max-w-xl.sm\\:as-max-h-2xl.sm\\:as-w-full.as-opacity-100.as-translate-y-0.sm\\:as-scale-100 > div > div.as-px-4.as-pt-5.as-pb-4.sm\\:as-p-6.sm\\:as-pb-4.as-modal-body > div > div:nth-child(2) > div.as-flex > p > span, #headlessui-dialog-8 > div > div.as-relative.as-inline-block.as-align-bottom.as-bg-white.as-rounded-lg.as-text-left.as-overflow-hidden.as-shadow-xl.as-transform.as-transition-all.sm\\:as-my-8.sm\\:as-align-middle.sm\\:as-max-w-xl.sm\\:as-max-h-2xl.sm\\:as-w-full.as-opacity-100.as-translate-y-0.sm\\:as-scale-100 > div > div.as-px-4.as-pt-5.as-pb-4.sm\\:as-p-6.sm\\:as-pb-4.as-modal-body > div > div:nth-child(2) > div.as-my-4 > label, #headlessui-dialog-8 > div > div.as-relative.as-inline-block.as-align-bottom.as-bg-white.as-rounded-lg.as-text-left.as-overflow-hidden.as-shadow-xl.as-transform.as-transition-all.sm\\:as-my-8.sm\\:as-align-middle.sm\\:as-max-w-xl.sm\\:as-max-h-2xl.sm\\:as-w-full.as-opacity-100.as-translate-y-0.sm\\:as-scale-100 > div > div.as-px-4.as-pt-5.as-pb-4.sm\\:as-p-6.sm\\:as-pb-4.as-modal-body > div > div:nth-child(2) > div.as-my-3 > label, #headlessui-dialog-8 > div > div.as-relative.as-inline-block.as-align-bottom.as-bg-white.as-rounded-lg.as-text-left.as-overflow-hidden.as-shadow-xl.as-transform.as-transition-all.sm\\:as-my-8.sm\\:as-align-middle.sm\\:as-max-w-xl.sm\\:as-max-h-2xl.sm\\:as-w-full.as-opacity-100.as-translate-y-0.sm\\:as-scale-100 > div > div.as-px-4.as-pt-5.as-pb-4.sm\\:as-p-6.sm\\:as-pb-4.as-modal-body > div > div:nth-child(2) > div.as-my-3 > div > select{\ncolor: white !important;\n}\n#headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-billing, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div:nth-child(2) > div, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-shipping, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-payment{\nborder-width: 1px !important;\n}\na.appstle_manageSubBtn {\n    left: 835px !important;\n    top: 222px !important;\n}\ntr.as-bg-white.as-border-b.hover\\:as-bg-gray-50.as-product-line {\n  background-color: #000 !important;\n  border-width: 0px;\n}\n.as-flex.as-justify-between.as-items-center.as-mb-1.as-product-details_header {\n    margin-bottom: 0px!important;\n}\n.as-text-gray-700 {\n    --tw-text-opacity: 1;\n    color: #FFF !important;\n}\nspan.as-label, span.as-value, span.as-delivery-price.as-delivery-price-value, span.as-delivery-price.as-delivery-price-label, .as-text-gray-900, p.as-text-sm.as-text-gray-800.as-mb-2.as-product-title, .as-text-gray-500 {\n    --tw-text-opacity: 1;\n    color: #FFF!important;\n}\n.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-additional-order-details {\n    background-color: #000 !important;\n}\n#headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-billing, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div:nth-child(2) > div, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-shipping, #headlessui-tabs-panel-4 > div > div.lg\\:as-col-span-4.as-grid.as-gap-4 > div.as-bg-white.as-shadow.as-overflow-hidden.sm\\:as-rounded-lg.as-p-4.as-card.as-edit-payment {\n    border-width: 0px !important;\n}\n.as-bg-white {\n    --tw-bg-opacity: 1;\n    background-color: #000 !important;\n}\n.as-text-gray-800 {\n    --tw-text-opacity: 1;\n    color: #FFF !important;\n}",
            "priceSelector": ".product__price",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": ".product-slide",
            "badgeTop": "",
            "pricePlacement": "BEFORE"
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);

