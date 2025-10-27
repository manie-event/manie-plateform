
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AppsEcommerceCartCheckout': typeof import("../components/apps/ecommerce/cart/CartCheckout.vue")['default']
    'AppsEcommerceCartEmpty': typeof import("../components/apps/ecommerce/cart/CartEmpty.vue")['default']
    'AppsEcommerceCartStepsAddAddress': typeof import("../components/apps/ecommerce/cart/steps/AddAddress.vue")['default']
    'AppsEcommerceCartStepsAddCard': typeof import("../components/apps/ecommerce/cart/steps/AddCard.vue")['default']
    'AppsEcommerceCartStepsAddressCard': typeof import("../components/apps/ecommerce/cart/steps/AddressCard.vue")['default']
    'AppsEcommerceCartStepsOrderSummary': typeof import("../components/apps/ecommerce/cart/steps/OrderSummary.vue")['default']
    'AppsEcommerceCartStepsPayment': typeof import("../components/apps/ecommerce/cart/steps/Payment.vue")['default']
    'AppsEcommerceCartStepsStepFirst': typeof import("../components/apps/ecommerce/cart/steps/StepFirst.vue")['default']
    'AppsEcommerceCartStepsStepSecond': typeof import("../components/apps/ecommerce/cart/steps/StepSecond.vue")['default']
    'AppsEcommerceCartStepsTestStripe': typeof import("../components/apps/ecommerce/cart/steps/TestStripe.vue")['default']
    'AppsEcommerceCartStepsThankyou': typeof import("../components/apps/ecommerce/cart/steps/Thankyou.vue")['default']
    'AppsNotesAddNote': typeof import("../components/apps/notes/AddNote.vue")['default']
    'AppsNotesContent': typeof import("../components/apps/notes/NotesContent.vue")['default']
    'AppsNotesListing': typeof import("../components/apps/notes/NotesListing.vue")['default']
    'AppsUserProfileEditClientProfil': typeof import("../components/apps/user-profile/EditClientProfil.vue")['default']
    'AppsUserProfileEditProfessionalProfil': typeof import("../components/apps/user-profile/EditProfessionalProfil.vue")['default']
    'AppsUserProfileIntroCard': typeof import("../components/apps/user-profile/IntroCard.vue")['default']
    'AppsUserProfileModalRedirection': typeof import("../components/apps/user-profile/ModalRedirection.vue")['default']
    'AppsUserProfileBanner': typeof import("../components/apps/user-profile/ProfileBanner.vue")['default']
    'AppsUserProfileBannerOne': typeof import("../components/apps/user-profile/ProfileBannerOne.vue")['default']
    'AppsUserProfileProfileOneIntroCard': typeof import("../components/apps/user-profile/profile-one/IntroCard.vue")['default']
    'AppsUserProfileProfileOneNumberCards': typeof import("../components/apps/user-profile/profile-one/NumberCards.vue")['default']
    'AppsUserProfileProfileOneTeamsCard': typeof import("../components/apps/user-profile/profile-one/TeamsCard.vue")['default']
    'AuthLoginForm': typeof import("../components/auth/LoginForm.vue")['default']
    'AuthRegisterForm': typeof import("../components/auth/RegisterForm.vue")['default']
    'AuthResetForm': typeof import("../components/auth/ResetForm.vue")['default']
    'AuthTwoStepForm': typeof import("../components/auth/TwoStepForm.vue")['default']
    'CommonBaseEmptyState': typeof import("../components/common/BaseEmptyState.vue")['default']
    'CommonBaseModal': typeof import("../components/common/BaseModal.vue")['default']
    'CommonBaseSidePicture': typeof import("../components/common/BaseSidePicture.vue")['default']
    'CommonLoader': typeof import("../components/common/Loader.vue")['default']
    'CommonErrorToaster': typeof import("../components/common/errorToaster.vue")['default']
    'CommonSuccessToaster': typeof import("../components/common/successToaster.vue")['default']
    'DashboardsDashboardClientAddEventService': typeof import("../components/dashboards/dashboard-client/AddEventService.vue")['default']
    'DashboardsDashboardClientCheckList': typeof import("../components/dashboards/dashboard-client/CheckList.vue")['default']
    'DashboardsDashboardClientCongratulationsCard': typeof import("../components/dashboards/dashboard-client/CongratulationsCard.vue")['default']
    'DashboardsDashboardClientCurrentEvents': typeof import("../components/dashboards/dashboard-client/CurrentEvents.vue")['default']
    'DashboardsDashboardClientCustomers': typeof import("../components/dashboards/dashboard-client/Customers.vue")['default']
    'DashboardsDashboardClientDateCounter': typeof import("../components/dashboards/dashboard-client/DateCounter.vue")['default']
    'DashboardsDashboardClientEventDetails': typeof import("../components/dashboards/dashboard-client/EventDetails.vue")['default']
    'DashboardsDashboardClientEvents': typeof import("../components/dashboards/dashboard-client/Events.vue")['default']
    'DashboardsDashboardClientLatestDeals': typeof import("../components/dashboards/dashboard-client/LatestDeals.vue")['default']
    'DashboardsDashboardClientLatestReviews': typeof import("../components/dashboards/dashboard-client/LatestReviews.vue")['default']
    'DashboardsDashboardClientPayments': typeof import("../components/dashboards/dashboard-client/Payments.vue")['default']
    'DashboardsDashboardClientPricingChoice': typeof import("../components/dashboards/dashboard-client/PricingChoice.vue")['default']
    'DashboardsDashboardClientProductsChart': typeof import("../components/dashboards/dashboard-client/ProductsChart.vue")['default']
    'DashboardsDashboardClientProductsTable': typeof import("../components/dashboards/dashboard-client/ProductsTable.vue")['default']
    'DashboardsDashboardClientProfessionalProfil': typeof import("../components/dashboards/dashboard-client/ProfessionalProfil.vue")['default']
    'DashboardsDashboardClientProjectLeap': typeof import("../components/dashboards/dashboard-client/ProjectLeap.vue")['default']
    'DashboardsDashboardClientPropositionsPresta': typeof import("../components/dashboards/dashboard-client/PropositionsPresta.vue")['default']
    'DashboardsDashboard2FigmaCard': typeof import("../components/dashboards/dashboard2/FigmaCard.vue")['default']
    'DashboardsDashboard2PayingTable': typeof import("../components/dashboards/dashboard2/PayingTable.vue")['default']
    'DashboardsDashboard2ProductSales': typeof import("../components/dashboards/dashboard2/ProductSales.vue")['default']
    'DashboardsDashboard2ProfessionalMarketPlace': typeof import("../components/dashboards/dashboard2/ProfessionalMarketPlace.vue")['default']
    'DashboardsDashboard2ProfileCards': typeof import("../components/dashboards/dashboard2/ProfileCards.vue")['default']
    'DashboardsDashboard2ProfitExpanse': typeof import("../components/dashboards/dashboard2/ProfitExpanse.vue")['default']
    'DashboardsDashboard2PropositionAccepted': typeof import("../components/dashboards/dashboard2/PropositionAccepted.vue")['default']
    'DashboardsDashboard2PropositionDetails': typeof import("../components/dashboards/dashboard2/PropositionDetails.vue")['default']
    'DashboardsDashboard2TextCards': typeof import("../components/dashboards/dashboard2/TextCards.vue")['default']
    'DashboardsDashboard2TrafficDistribution': typeof import("../components/dashboards/dashboard2/TrafficDistribution.vue")['default']
    'DashboardsDashboard2UpcommingSchedule': typeof import("../components/dashboards/dashboard2/UpcommingSchedule.vue")['default']
    'DashboardsDashboard2WelcomeCard': typeof import("../components/dashboards/dashboard2/WelcomeCard.vue")['default']
    'FormsFormCustomFrom': typeof import("../components/forms/form-custom/CustomFrom.vue")['default']
    'FormsFormElementsAutocompleteComboBox': typeof import("../components/forms/form-elements/autocomplete/ComboBox.vue")['default']
    'FormsFormElementsAutocompleteMultipleOptions': typeof import("../components/forms/form-elements/autocomplete/MultipleOptions.vue")['default']
    'FormsFormElementsAutocompleteWithCaption': typeof import("../components/forms/form-elements/autocomplete/WithCaption.vue")['default']
    'FormsFormElementsButtonBaseButtons': typeof import("../components/forms/form-elements/button/BaseButtons.vue")['default']
    'FormsFormElementsButtonColorsButtons': typeof import("../components/forms/form-elements/button/ColorsButtons.vue")['default']
    'FormsFormElementsButtonIconColor': typeof import("../components/forms/form-elements/button/IconColor.vue")['default']
    'FormsFormElementsButtonIconColorSizes': typeof import("../components/forms/form-elements/button/IconColorSizes.vue")['default']
    'FormsFormElementsButtonIconsButtons': typeof import("../components/forms/form-elements/button/IconsButtons.vue")['default']
    'FormsFormElementsButtonOutlineIconColor': typeof import("../components/forms/form-elements/button/OutlineIconColor.vue")['default']
    'FormsFormElementsButtonOutlineSizes': typeof import("../components/forms/form-elements/button/OutlineSizes.vue")['default']
    'FormsFormElementsButtonOutlinedButtons': typeof import("../components/forms/form-elements/button/OutlinedButtons.vue")['default']
    'FormsFormElementsButtonOutlinedIconSize': typeof import("../components/forms/form-elements/button/OutlinedIconSize.vue")['default']
    'FormsFormElementsButtonSizeButtons': typeof import("../components/forms/form-elements/button/SizeButtons.vue")['default']
    'FormsFormElementsButtonTextButtons': typeof import("../components/forms/form-elements/button/TextButtons.vue")['default']
    'FormsFormElementsButtonButtonGroupDefault': typeof import("../components/forms/form-elements/button/buttonGroup/Default.vue")['default']
    'FormsFormElementsButtonButtonGroupOutlined': typeof import("../components/forms/form-elements/button/buttonGroup/Outlined.vue")['default']
    'FormsFormElementsButtonButtonGroupPlain': typeof import("../components/forms/form-elements/button/buttonGroup/Plain.vue")['default']
    'FormsFormElementsButtonButtonGroupText': typeof import("../components/forms/form-elements/button/buttonGroup/Text.vue")['default']
    'FormsFormElementsCheckboxBasicCheckboxes': typeof import("../components/forms/form-elements/checkbox/BasicCheckboxes.vue")['default']
    'FormsFormElementsCheckboxColorCheckboxes': typeof import("../components/forms/form-elements/checkbox/ColorCheckboxes.vue")['default']
    'FormsFormElementsCheckboxCustomCheckbox': typeof import("../components/forms/form-elements/checkbox/CustomCheckbox.vue")['default']
    'FormsFormElementsCheckboxLabelCheckboxes': typeof import("../components/forms/form-elements/checkbox/LabelCheckboxes.vue")['default']
    'FormsFormElementsComboboxDense': typeof import("../components/forms/form-elements/combobox/ComboboxDense.vue")['default']
    'FormsFormElementsComboboxMultiple': typeof import("../components/forms/form-elements/combobox/ComboboxMultiple.vue")['default']
    'FormsFormElementsCustominputInputAppendPrepend': typeof import("../components/forms/form-elements/custominput/InputAppendPrepend.vue")['default']
    'FormsFormElementsCustominputInputError': typeof import("../components/forms/form-elements/custominput/InputError.vue")['default']
    'FormsFormElementsCustominputInputHideDetails': typeof import("../components/forms/form-elements/custominput/InputHideDetails.vue")['default']
    'FormsFormElementsCustominputInputLoading': typeof import("../components/forms/form-elements/custominput/InputLoading.vue")['default']
    'FormsFormElementsCustominputInputMultipleError': typeof import("../components/forms/form-elements/custominput/InputMultipleError.vue")['default']
    'FormsFormElementsCustominputInputRules': typeof import("../components/forms/form-elements/custominput/InputRules.vue")['default']
    'FormsFormElementsDatetimeDatePicker': typeof import("../components/forms/form-elements/datetime/DatePicker.vue")['default']
    'FormsFormElementsDatetimeTimePicker': typeof import("../components/forms/form-elements/datetime/TimePicker.vue")['default']
    'FormsFormElementsFileinputFileInputAccept': typeof import("../components/forms/form-elements/fileinput/FileInputAccept.vue")['default']
    'FormsFormElementsFileinputFileInputChips': typeof import("../components/forms/form-elements/fileinput/FileInputChips.vue")['default']
    'FormsFormElementsFileinputFileInputCounter': typeof import("../components/forms/form-elements/fileinput/FileInputCounter.vue")['default']
    'FormsFormElementsFileinputFileInputDensity': typeof import("../components/forms/form-elements/fileinput/FileInputDensity.vue")['default']
    'FormsFormElementsFileinputFileInputMultiple': typeof import("../components/forms/form-elements/fileinput/FileInputMultiple.vue")['default']
    'FormsFormElementsFileinputFileInputPrepand': typeof import("../components/forms/form-elements/fileinput/FileInputPrepand.vue")['default']
    'FormsFormElementsFileinputFileInputSelection': typeof import("../components/forms/form-elements/fileinput/FileInputSelection.vue")['default']
    'FormsFormElementsFileinputFileInputValidation': typeof import("../components/forms/form-elements/fileinput/FileInputValidation.vue")['default']
    'FormsFormElementsRadioColor': typeof import("../components/forms/form-elements/radio/Color.vue")['default']
    'FormsFormElementsRadioDefault': typeof import("../components/forms/form-elements/radio/Default.vue")['default']
    'FormsFormElementsRadioDefaultDirection': typeof import("../components/forms/form-elements/radio/DefaultDirection.vue")['default']
    'FormsFormElementsRadioInlineDirection': typeof import("../components/forms/form-elements/radio/InlineDirection.vue")['default']
    'FormsFormElementsRadioLabel': typeof import("../components/forms/form-elements/radio/Label.vue")['default']
    'FormsFormElementsRadioLabelwithColor': typeof import("../components/forms/form-elements/radio/LabelwithColor.vue")['default']
    'FormsFormElementsSelectChip': typeof import("../components/forms/form-elements/select/SelectChip.vue")['default']
    'FormsFormElementsSelectDefault': typeof import("../components/forms/form-elements/select/SelectDefault.vue")['default']
    'FormsFormElementsSelectDensity': typeof import("../components/forms/form-elements/select/SelectDensity.vue")['default']
    'FormsFormElementsSelectMultiple': typeof import("../components/forms/form-elements/select/SelectMultiple.vue")['default']
    'FormsFormElementsSelectReadOnly': typeof import("../components/forms/form-elements/select/SelectReadOnly.vue")['default']
    'FormsFormElementsSliderCustom': typeof import("../components/forms/form-elements/slider/Custom.vue")['default']
    'FormsFormElementsSliderDefault': typeof import("../components/forms/form-elements/slider/Default.vue")['default']
    'FormsFormElementsSliderDisabled': typeof import("../components/forms/form-elements/slider/Disabled.vue")['default']
    'FormsFormElementsSliderSteps': typeof import("../components/forms/form-elements/slider/Steps.vue")['default']
    'FormsFormElementsSliderTickSize': typeof import("../components/forms/form-elements/slider/TickSize.vue")['default']
    'FormsFormElementsSliderTicks': typeof import("../components/forms/form-elements/slider/Ticks.vue")['default']
    'FormsFormElementsSliderVertical': typeof import("../components/forms/form-elements/slider/Vertical.vue")['default']
    'FormsFormElementsSliderVolume': typeof import("../components/forms/form-elements/slider/Volume.vue")['default']
    'FormsFormElementsStepperAlternatelabel': typeof import("../components/forms/form-elements/stepper/Alternatelabel.vue")['default']
    'FormsFormElementsStepperAlternativeErrors': typeof import("../components/forms/form-elements/stepper/AlternativeErrors.vue")['default']
    'FormsFormElementsStepperEditableStepper': typeof import("../components/forms/form-elements/stepper/EditableStepper.vue")['default']
    'FormsFormElementsStepperItemStepper': typeof import("../components/forms/form-elements/stepper/ItemStepper.vue")['default']
    'FormsFormElementsStepperLinearSteppers': typeof import("../components/forms/form-elements/stepper/LinearSteppers.vue")['default']
    'FormsFormElementsStepperNoEditable': typeof import("../components/forms/form-elements/stepper/NoEditable.vue")['default']
    'FormsFormElementsStepperOptionalSteps': typeof import("../components/forms/form-elements/stepper/OptionalSteps.vue")['default']
    'FormsFormElementsSwitchColors': typeof import("../components/forms/form-elements/switch/Colors.vue")['default']
    'FormsFormElementsSwitchDefault': typeof import("../components/forms/form-elements/switch/Default.vue")['default']
    'FormsFormElementsSwitchInset': typeof import("../components/forms/form-elements/switch/Inset.vue")['default']
    'FormsFormElementsSwitchInsetColors': typeof import("../components/forms/form-elements/switch/InsetColors.vue")['default']
    'FormsFormElementsSwitchLabel': typeof import("../components/forms/form-elements/switch/Label.vue")['default']
    'FormsFormElementsSwitchStates': typeof import("../components/forms/form-elements/switch/States.vue")['default']
    'FormsFormElementsTreeviewActivatable': typeof import("../components/forms/form-elements/treeview/Activatable.vue")['default']
    'FormsFormElementsTreeviewBasic': typeof import("../components/forms/form-elements/treeview/Basic.vue")['default']
    'FormsFormElementsTreeviewColors': typeof import("../components/forms/form-elements/treeview/Colors.vue")['default']
    'FormsFormElementsTreeviewDenseMode': typeof import("../components/forms/form-elements/treeview/DenseMode.vue")['default']
    'FormsFormElementsTreeviewOpenAll': typeof import("../components/forms/form-elements/treeview/OpenAll.vue")['default']
    'FormsFormHorizontalAccountDetailsTab': typeof import("../components/forms/form-horizontal/AccountDetailsTab.vue")['default']
    'FormsFormHorizontalBasicLayout': typeof import("../components/forms/form-horizontal/BasicLayout.vue")['default']
    'FormsFormHorizontalBasicWithIcons': typeof import("../components/forms/form-horizontal/BasicWithIcons.vue")['default']
    'FormsFormHorizontalCollapsible': typeof import("../components/forms/form-horizontal/Collapsible.vue")['default']
    'FormsFormHorizontalFormLabelAlign': typeof import("../components/forms/form-horizontal/FormLabelAlign.vue")['default']
    'FormsFormHorizontalFormSeprator': typeof import("../components/forms/form-horizontal/FormSeprator.vue")['default']
    'FormsFormHorizontalPersonalInfoTab': typeof import("../components/forms/form-horizontal/PersonalInfoTab.vue")['default']
    'FormsFormHorizontalSocialLinksTab': typeof import("../components/forms/form-horizontal/SocialLinksTab.vue")['default']
    'FormsFormLayoutsBasicHeaderForm': typeof import("../components/forms/form-layouts/BasicHeaderForm.vue")['default']
    'FormsFormLayoutsDefaultForm': typeof import("../components/forms/form-layouts/DefaultForm.vue")['default']
    'FormsFormLayoutsDisabledForm': typeof import("../components/forms/form-layouts/DisabledForm.vue")['default']
    'FormsFormLayoutsFormLeftIcon': typeof import("../components/forms/form-layouts/FormLeftIcon.vue")['default']
    'FormsFormLayoutsFormRightIcon': typeof import("../components/forms/form-layouts/FormRightIcon.vue")['default']
    'FormsFormLayoutsInputVarients': typeof import("../components/forms/form-layouts/InputVarients.vue")['default']
    'FormsFormLayoutsOrdinaryForm': typeof import("../components/forms/form-layouts/OrdinaryForm.vue")['default']
    'FormsFormValidationCheckBox': typeof import("../components/forms/form-validation/CheckBox.vue")['default']
    'FormsFormValidationMailValidation': typeof import("../components/forms/form-validation/MailValidation.vue")['default']
    'FormsFormValidationOnType': typeof import("../components/forms/form-validation/OnType.vue")['default']
    'FormsFormValidationRadio': typeof import("../components/forms/form-validation/Radio.vue")['default']
    'FormsFormValidationSelect': typeof import("../components/forms/form-validation/Select.vue")['default']
    'FormsFormValidationTextInput': typeof import("../components/forms/form-validation/TextInput.vue")['default']
    'FormsFormValidationVeeValidation': typeof import("../components/forms/form-validation/VeeValidation.vue")['default']
    'FormsFormVerticalAccountDetailsTab': typeof import("../components/forms/form-vertical/AccountDetailsTab.vue")['default']
    'FormsFormVerticalBasicLayout': typeof import("../components/forms/form-vertical/BasicLayout.vue")['default']
    'FormsFormVerticalBasicWithIcons': typeof import("../components/forms/form-vertical/BasicWithIcons.vue")['default']
    'FormsFormVerticalCollapsible': typeof import("../components/forms/form-vertical/Collapsible.vue")['default']
    'FormsFormVerticalFormSeprator': typeof import("../components/forms/form-vertical/FormSeprator.vue")['default']
    'FormsFormVerticalPersonalInfoTab': typeof import("../components/forms/form-vertical/PersonalInfoTab.vue")['default']
    'FormsFormVerticalSocialLinksTab': typeof import("../components/forms/form-vertical/SocialLinksTab.vue")['default']
    'FormsPluginsEditorMenu': typeof import("../components/forms/plugins/editor/EditorMenu.vue")['default']
    'FormsPluginsEditorMenubar': typeof import("../components/forms/plugins/editor/EditorMenubar.vue")['default']
    'FrontpagesAboutUsArchivement': typeof import("../components/frontpages/AboutUs/Archivement.vue")['default']
    'FrontpagesAboutUsHeroText': typeof import("../components/frontpages/AboutUs/HeroText.vue")['default']
    'FrontpagesAboutUsSetupProcess': typeof import("../components/frontpages/AboutUs/SetupProcess.vue")['default']
    'FrontpagesContactUsContactForm': typeof import("../components/frontpages/ContactUs/ContactForm.vue")['default']
    'FrontpagesContactUsContactMap': typeof import("../components/frontpages/ContactUs/ContactMap.vue")['default']
    'FrontpagesHomepageClientReviews': typeof import("../components/frontpages/Homepage/ClientReviews.vue")['default']
    'FrontpagesHomepageClientTabs': typeof import("../components/frontpages/Homepage/ClientTabs.vue")['default']
    'FrontpagesHomepageComponies': typeof import("../components/frontpages/Homepage/Componies.vue")['default']
    'FrontpagesHomepageContactBar': typeof import("../components/frontpages/Homepage/ContactBar.vue")['default']
    'FrontpagesHomepageFAQ': typeof import("../components/frontpages/Homepage/FAQ.vue")['default']
    'FrontpagesHomepageFeatureTabs': typeof import("../components/frontpages/Homepage/FeatureTabs.vue")['default']
    'FrontpagesHomepageHighlights': typeof import("../components/frontpages/Homepage/Highlights.vue")['default']
    'FrontpagesHomepageMainbanner': typeof import("../components/frontpages/Homepage/Mainbanner.vue")['default']
    'FrontpagesHomepageOurClients': typeof import("../components/frontpages/Homepage/OurClients.vue")['default']
    'FrontpagesHomepageOurTeam': typeof import("../components/frontpages/Homepage/OurTeam.vue")['default']
    'FrontpagesHomepagePackages': typeof import("../components/frontpages/Homepage/Packages.vue")['default']
    'FrontpagesHomepageProfessionalTabs': typeof import("../components/frontpages/Homepage/ProfessionalTabs.vue")['default']
    'FrontpagesHomepagePurchaseTemplate': typeof import("../components/frontpages/Homepage/PurchaseTemplate.vue")['default']
    'FrontpagesHomepageSecurePayment': typeof import("../components/frontpages/Homepage/SecurePayment.vue")['default']
    'FrontpagesSharedTextBannerCard': typeof import("../components/frontpages/Shared/TextBannerCard.vue")['default']
    'FrontpagesLayoutAnnounceBar': typeof import("../components/frontpages/layout/AnnounceBar.vue")['default']
    'FrontpagesLayoutFooter': typeof import("../components/frontpages/layout/Footer.vue")['default']
    'FrontpagesLayoutHeader': typeof import("../components/frontpages/layout/Header.vue")['default']
    'FrontpagesLayoutNavigation': typeof import("../components/frontpages/layout/Navigation.vue")['default']
    'JuridiqueCharteBonneConduite': typeof import("../components/juridique/CharteBonneConduite.vue")['default']
    'LandingpageLayoutFooter': typeof import("../components/landingpage/layout/Footer.vue")['default']
    'LandingpageLayoutHeader': typeof import("../components/landingpage/layout/Header.vue")['default']
    'LandingpageLayoutMobileSidebar': typeof import("../components/landingpage/layout/MobileSidebar.vue")['default']
    'LandingpageLayoutNavigation': typeof import("../components/landingpage/layout/Navigation.vue")['default']
    'LandingpageLayoutPageMegamenu': typeof import("../components/landingpage/layout/PageMegamenu.vue")['default']
    'LandingpageLayoutPageMenuQuicklinks': typeof import("../components/landingpage/layout/PageMenuQuicklinks.vue")['default']
    'LandingpageSectionPurchase': typeof import("../components/landingpage/section/Purchase.vue")['default']
    'LandingpageSectionRevolution': typeof import("../components/landingpage/section/Revolution.vue")['default']
    'LandingpageSectionOtherFeatures': typeof import("../components/landingpage/section/otherFeatures.vue")['default']
    'LandingpageSectionOurProducts': typeof import("../components/landingpage/section/ourProducts.vue")['default']
    'LandingpageSectionUserReview': typeof import("../components/landingpage/section/userReview.vue")['default']
    'LcFullCustomizer': typeof import("../components/lc/Full/customizer/Customizer.vue")['default']
    'LcFullHorizontalHeader': typeof import("../components/lc/Full/horizontal-header/index.vue")['default']
    'LcFullHorizontalSidebarNavCollapse': typeof import("../components/lc/Full/horizontal-sidebar/NavCollapse/Index.vue")['default']
    'LcFullHorizontalSidebarNavItem': typeof import("../components/lc/Full/horizontal-sidebar/NavItem/Index.vue")['default']
    'LcFullHorizontalSidebarHorizontalItems': typeof import("../components/lc/Full/horizontal-sidebar/horizontalItems")['default']
    'LcFullHorizontalSidebar': typeof import("../components/lc/Full/horizontal-sidebar/index.vue")['default']
    'LcFullVerticalHeaderAppsLink': typeof import("../components/lc/Full/vertical-header/AppsLink.vue")['default']
    'LcFullVerticalHeaderNavigations': typeof import("../components/lc/Full/vertical-header/Navigations.vue")['default']
    'LcFullVerticalHeaderNotificationDD': typeof import("../components/lc/Full/vertical-header/NotificationDD.vue")['default']
    'LcFullVerticalHeaderProfileDD': typeof import("../components/lc/Full/vertical-header/ProfileDD.vue")['default']
    'LcFullVerticalHeaderQuickLinks': typeof import("../components/lc/Full/vertical-header/QuickLinks.vue")['default']
    'LcFullVerticalHeaderRightMobileSidebar': typeof import("../components/lc/Full/vertical-header/RightMobileSidebar.vue")['default']
    'LcFullVerticalHeaderSearchbar': typeof import("../components/lc/Full/vertical-header/Searchbar.vue")['default']
    'LcFullVerticalHeaderThemeToggler': typeof import("../components/lc/Full/vertical-header/ThemeToggler.vue")['default']
    'LcFullVerticalHeader': typeof import("../components/lc/Full/vertical-header/index.vue")['default']
    'LcFullVerticalSidebarDropDown': typeof import("../components/lc/Full/vertical-sidebar/DropDown/index.vue")['default']
    'LcFullVerticalSidebarIcon': typeof import("../components/lc/Full/vertical-sidebar/Icon.vue")['default']
    'LcFullVerticalSidebarMoreOption': typeof import("../components/lc/Full/vertical-sidebar/MoreOption/index.vue")['default']
    'LcFullVerticalSidebarNavCollapse': typeof import("../components/lc/Full/vertical-sidebar/NavCollapse/index.vue")['default']
    'LcFullVerticalSidebarNavGroup': typeof import("../components/lc/Full/vertical-sidebar/NavGroup/index.vue")['default']
    'LcFullVerticalSidebarNavItem': typeof import("../components/lc/Full/vertical-sidebar/NavItem/index.vue")['default']
    'LcFullVerticalSidebarExtrabox': typeof import("../components/lc/Full/vertical-sidebar/extrabox/index.vue")['default']
    'LcFullVerticalSidebar': typeof import("../components/lc/Full/vertical-sidebar/index.vue")['default']
    'LcFullVerticalSidebarItem': typeof import("../components/lc/Full/vertical-sidebar/sidebarItem")['default']
    'PagesAccountSettingsAccountTab': typeof import("../components/pages/account-settings/AccountTab.vue")['default']
    'PagesAccountSettingsBillsTab': typeof import("../components/pages/account-settings/BillsTab.vue")['default']
    'PagesAccountSettingsNotificationTab': typeof import("../components/pages/account-settings/NotificationTab.vue")['default']
    'PagesAccountSettingsSecurityTab': typeof import("../components/pages/account-settings/SecurityTab.vue")['default']
    'PagesFaqQuestion': typeof import("../components/pages/faq/FaqQuestion.vue")['default']
    'PagesFaqStillHaveQuestions': typeof import("../components/pages/faq/StillHaveQuestions.vue")['default']
    'PagesSearchResultsSearchLinks': typeof import("../components/pages/search-results/SearchLinks.vue")['default']
    'QuestionnairesCustomerForm': typeof import("../components/questionnaires/CustomerForm.vue")['default']
    'QuestionnairesDynamicFormDialog': typeof import("../components/questionnaires/DynamicFormDialog.vue")['default']
    'QuestionnairesFormField': typeof import("../components/questionnaires/FormField.vue")['default']
    'QuestionnairesSectionController': typeof import("../components/questionnaires/SectionController.vue")['default']
    'QuestionnairesServicesPrestataire': typeof import("../components/questionnaires/ServicesPrestataire.vue")['default']
    'QuestionnairesValidationError': typeof import("../components/questionnaires/ValidationError.vue")['default']
    'SharedAppBaseCard': typeof import("../components/shared/AppBaseCard.vue")['default']
    'SharedAppEmailCard': typeof import("../components/shared/AppEmailCard.vue")['default']
    'SharedBaseBreadcrumb': typeof import("../components/shared/BaseBreadcrumb.vue")['default']
    'SharedBaseCard': typeof import("../components/shared/BaseCard.vue")['default']
    'SharedCardHeaderFooter': typeof import("../components/shared/CardHeaderFooter.vue")['default']
    'SharedProductBaseCard': typeof import("../components/shared/ProductBaseCard.vue")['default']
    'SharedUiChildCard': typeof import("../components/shared/UiChildCard.vue")['default']
    'SharedUiParentCard': typeof import("../components/shared/UiParentCard.vue")['default']
    'SharedUiParentCardLogo': typeof import("../components/shared/UiParentCardLogo.vue")['default']
    'SharedUiTableCard': typeof import("../components/shared/UiTableCard.vue")['default']
    'SharedUiTextfieldPrimary': typeof import("../components/shared/UiTextfieldPrimary.vue")['default']
    'SharedUiTittleSubtitleCard': typeof import("../components/shared/UiTittleSubtitleCard.vue")['default']
    'SharedWidgetCard': typeof import("../components/shared/WidgetCard.vue")['default']
    'SharedWidgetCardv2': typeof import("../components/shared/WidgetCardv2.vue")['default']
    'SharedECommerceCard': typeof import("../components/shared/eCommerceCard.vue")['default']
    'StyleComponentsTypographyDefaultText': typeof import("../components/style-components/typography/DefaultText.vue")['default']
    'StyleComponentsTypographyHeading': typeof import("../components/style-components/typography/Heading.vue")['default']
    'StyleComponentsTypographyOpacity': typeof import("../components/style-components/typography/Opacity.vue")['default']
    'StyleComponentsTypographyTextAlignment': typeof import("../components/style-components/typography/TextAlignment.vue")['default']
    'StyleComponentsTypographyTextDecoration': typeof import("../components/style-components/typography/TextDecoration.vue")['default']
    'TableTable1': typeof import("../components/table/Table1.vue")['default']
    'TableTable2': typeof import("../components/table/Table2.vue")['default']
    'TableTable3': typeof import("../components/table/Table3.vue")['default']
    'TableTable4': typeof import("../components/table/Table4.vue")['default']
    'TableTable5': typeof import("../components/table/Table5.vue")['default']
    'UiComponentsAlertAction': typeof import("../components/ui-components/alert/Action.vue")['default']
    'UiComponentsAlertBasic': typeof import("../components/ui-components/alert/Basic.vue")['default']
    'UiComponentsAlertClosable': typeof import("../components/ui-components/alert/Closable.vue")['default']
    'UiComponentsAlertDescription': typeof import("../components/ui-components/alert/Description.vue")['default']
    'UiComponentsAlertFilled': typeof import("../components/ui-components/alert/Filled.vue")['default']
    'UiComponentsAlertIcons': typeof import("../components/ui-components/alert/Icons.vue")['default']
    'UiComponentsAlertOutlined': typeof import("../components/ui-components/alert/Outlined.vue")['default']
    'UiComponentsAvatarBasicAvatar': typeof import("../components/ui-components/avatar/BasicAvatar.vue")['default']
    'UiComponentsAvatarIconAvatar': typeof import("../components/ui-components/avatar/IconAvatar.vue")['default']
    'UiComponentsAvatarImageAvatar': typeof import("../components/ui-components/avatar/ImageAvatar.vue")['default']
    'UiComponentsAvatarLetterAvatar': typeof import("../components/ui-components/avatar/LetterAvatar.vue")['default']
    'UiComponentsAvatarSizeAvatar': typeof import("../components/ui-components/avatar/SizeAvatar.vue")['default']
    'UiComponentsAvatarVariantAvatar': typeof import("../components/ui-components/avatar/VariantAvatar.vue")['default']
    'UiComponentsChipClosable': typeof import("../components/ui-components/chip/Closable.vue")['default']
    'UiComponentsChipCustomIcon': typeof import("../components/ui-components/chip/CustomIcon.vue")['default']
    'UiComponentsChipCustomIconOutlined': typeof import("../components/ui-components/chip/CustomIconOutlined.vue")['default']
    'UiComponentsChipDisabled': typeof import("../components/ui-components/chip/Disabled.vue")['default']
    'UiComponentsChipFilledColor': typeof import("../components/ui-components/chip/FilledColor.vue")['default']
    'UiComponentsChipLabelChip': typeof import("../components/ui-components/chip/LabelChip.vue")['default']
    'UiComponentsChipOutlined': typeof import("../components/ui-components/chip/Outlined.vue")['default']
    'UiComponentsChipSizes': typeof import("../components/ui-components/chip/Sizes.vue")['default']
    'UiComponentsDialogsActivator': typeof import("../components/ui-components/dialogs/DialogsActivator.vue")['default']
    'UiComponentsDialogsForm': typeof import("../components/ui-components/dialogs/DialogsForm.vue")['default']
    'UiComponentsDialogsFullscreen': typeof import("../components/ui-components/dialogs/DialogsFullscreen.vue")['default']
    'UiComponentsDialogsModel': typeof import("../components/ui-components/dialogs/DialogsModel.vue")['default']
    'UiComponentsDialogsNested': typeof import("../components/ui-components/dialogs/DialogsNested.vue")['default']
    'UiComponentsDialogsPersistent': typeof import("../components/ui-components/dialogs/DialogsPersistent.vue")['default']
    'UiComponentsDialogsScrollable': typeof import("../components/ui-components/dialogs/DialogsScrollable.vue")['default']
    'UiComponentsDialogsTransitions': typeof import("../components/ui-components/dialogs/DialogsTransitions.vue")['default']
    'UiComponentsExpansionpanelAdvance': typeof import("../components/ui-components/expansionpanel/Advance.vue")['default']
    'UiComponentsExpansionpanelBasic': typeof import("../components/ui-components/expansionpanel/Basic.vue")['default']
    'UiComponentsExpansionpanelCustomizedIcon': typeof import("../components/ui-components/expansionpanel/CustomizedIcon.vue")['default']
    'UiComponentsExpansionpanelDefaultExpand': typeof import("../components/ui-components/expansionpanel/DefaultExpand.vue")['default']
    'UiComponentsExpansionpanelInset': typeof import("../components/ui-components/expansionpanel/Inset.vue")['default']
    'UiComponentsExpansionpanelPopout': typeof import("../components/ui-components/expansionpanel/Popout.vue")['default']
    'UiComponentsListCustomAlignList': typeof import("../components/ui-components/list/CustomAlignList.vue")['default']
    'UiComponentsListDisabledList': typeof import("../components/ui-components/list/DisabledList.vue")['default']
    'UiComponentsListFolderList': typeof import("../components/ui-components/list/FolderList.vue")['default']
    'UiComponentsListNestedList': typeof import("../components/ui-components/list/NestedList.vue")['default']
    'UiComponentsListRoundedList': typeof import("../components/ui-components/list/RoundedList.vue")['default']
    'UiComponentsListScrollableList': typeof import("../components/ui-components/list/ScrollableList.vue")['default']
    'UiComponentsListSimpleList': typeof import("../components/ui-components/list/SimpleList.vue")['default']
    'UiComponentsListSwitchList': typeof import("../components/ui-components/list/SwitchList.vue")['default']
    'UiComponentsMenusActivatorTooltip': typeof import("../components/ui-components/menus/MenusActivatorTooltip.vue")['default']
    'UiComponentsMenusAnchor': typeof import("../components/ui-components/menus/MenusAnchor.vue")['default']
    'UiComponentsMenusHover': typeof import("../components/ui-components/menus/MenusHover.vue")['default']
    'UiComponentsMenusPopover': typeof import("../components/ui-components/menus/MenusPopover.vue")['default']
    'UiComponentsRattingBasicRatting': typeof import("../components/ui-components/ratting/BasicRatting.vue")['default']
    'UiComponentsRattingClearableRatting': typeof import("../components/ui-components/ratting/ClearableRatting.vue")['default']
    'UiComponentsRattingHalfRatting': typeof import("../components/ui-components/ratting/HalfRatting.vue")['default']
    'UiComponentsRattingHoverRatting': typeof import("../components/ui-components/ratting/HoverRatting.vue")['default']
    'UiComponentsRattingIconsRatting': typeof import("../components/ui-components/ratting/IconsRatting.vue")['default']
    'UiComponentsRattingLabelRatting': typeof import("../components/ui-components/ratting/LabelRatting.vue")['default']
    'UiComponentsRattingLengthRatting': typeof import("../components/ui-components/ratting/LengthRatting.vue")['default']
    'UiComponentsRattingReadOnlyRatting': typeof import("../components/ui-components/ratting/ReadOnlyRatting.vue")['default']
    'UiComponentsRattingSizeRatting': typeof import("../components/ui-components/ratting/SizeRatting.vue")['default']
    'UiComponentsTabsAlignCenterTabs': typeof import("../components/ui-components/tabs/AlignCenterTabs.vue")['default']
    'UiComponentsTabsAlignEndTabs': typeof import("../components/ui-components/tabs/AlignEndTabs.vue")['default']
    'UiComponentsTabsBasicTabs': typeof import("../components/ui-components/tabs/BasicTabs.vue")['default']
    'UiComponentsTabsCenterTabs': typeof import("../components/ui-components/tabs/CenterTabs.vue")['default']
    'UiComponentsTabsColorTabs': typeof import("../components/ui-components/tabs/ColorTabs.vue")['default']
    'UiComponentsTabsCustomIcons': typeof import("../components/ui-components/tabs/CustomIcons.vue")['default']
    'UiComponentsTabsDisableTabs': typeof import("../components/ui-components/tabs/DisableTabs.vue")['default']
    'UiComponentsTabsIconTabs': typeof import("../components/ui-components/tabs/IconTabs.vue")['default']
    'UiComponentsTabsIconsWithLabelTabs': typeof import("../components/ui-components/tabs/IconsWithLabelTabs.vue")['default']
    'UiComponentsTooltipIconTooltip': typeof import("../components/ui-components/tooltip/IconTooltip.vue")['default']
    'UiComponentsTooltipSimpleTooltip': typeof import("../components/ui-components/tooltip/SimpleTooltip.vue")['default']
    'UiComponentsTooltipToggleTolltip': typeof import("../components/ui-components/tooltip/ToggleTolltip.vue")['default']
    'WidgetsBannersBanner1': typeof import("../components/widgets/banners/Banner1.vue")['default']
    'WidgetsBannersBanner2': typeof import("../components/widgets/banners/Banner2.vue")['default']
    'WidgetsBannersBanner3': typeof import("../components/widgets/banners/Banner3.vue")['default']
    'WidgetsBannersBanner4': typeof import("../components/widgets/banners/Banner4.vue")['default']
    'WidgetsBannersBanner5': typeof import("../components/widgets/banners/Banner5.vue")['default']
    'WidgetsBannersBanner6': typeof import("../components/widgets/banners/Banner6.vue")['default']
    'WidgetsCardsCongtsCard': typeof import("../components/widgets/cards/CongtsCard.vue")['default']
    'WidgetsCardsPaymentGateway': typeof import("../components/widgets/cards/PaymentGateway.vue")['default']
    'WidgetsCardsProfileBoxCards': typeof import("../components/widgets/cards/ProfileBoxCards.vue")['default']
    'WidgetsCardsRecentTransactions': typeof import("../components/widgets/cards/RecentTransactions.vue")['default']
    'WidgetsCardsTopCards': typeof import("../components/widgets/cards/TopCards.vue")['default']
    'WidgetsChartsNetSells': typeof import("../components/widgets/charts/NetSells.vue")['default']
    'WidgetsChartsPayingChart': typeof import("../components/widgets/charts/PayingChart.vue")['default']
    'WidgetsChartsTraficDistributionChart': typeof import("../components/widgets/charts/TraficDistributionChart.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAppsEcommerceCartCheckout': LazyComponent<typeof import("../components/apps/ecommerce/cart/CartCheckout.vue")['default']>
    'LazyAppsEcommerceCartEmpty': LazyComponent<typeof import("../components/apps/ecommerce/cart/CartEmpty.vue")['default']>
    'LazyAppsEcommerceCartStepsAddAddress': LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/AddAddress.vue")['default']>
    'LazyAppsEcommerceCartStepsAddCard': LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/AddCard.vue")['default']>
    'LazyAppsEcommerceCartStepsAddressCard': LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/AddressCard.vue")['default']>
    'LazyAppsEcommerceCartStepsOrderSummary': LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/OrderSummary.vue")['default']>
    'LazyAppsEcommerceCartStepsPayment': LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/Payment.vue")['default']>
    'LazyAppsEcommerceCartStepsStepFirst': LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/StepFirst.vue")['default']>
    'LazyAppsEcommerceCartStepsStepSecond': LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/StepSecond.vue")['default']>
    'LazyAppsEcommerceCartStepsTestStripe': LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/TestStripe.vue")['default']>
    'LazyAppsEcommerceCartStepsThankyou': LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/Thankyou.vue")['default']>
    'LazyAppsNotesAddNote': LazyComponent<typeof import("../components/apps/notes/AddNote.vue")['default']>
    'LazyAppsNotesContent': LazyComponent<typeof import("../components/apps/notes/NotesContent.vue")['default']>
    'LazyAppsNotesListing': LazyComponent<typeof import("../components/apps/notes/NotesListing.vue")['default']>
    'LazyAppsUserProfileEditClientProfil': LazyComponent<typeof import("../components/apps/user-profile/EditClientProfil.vue")['default']>
    'LazyAppsUserProfileEditProfessionalProfil': LazyComponent<typeof import("../components/apps/user-profile/EditProfessionalProfil.vue")['default']>
    'LazyAppsUserProfileIntroCard': LazyComponent<typeof import("../components/apps/user-profile/IntroCard.vue")['default']>
    'LazyAppsUserProfileModalRedirection': LazyComponent<typeof import("../components/apps/user-profile/ModalRedirection.vue")['default']>
    'LazyAppsUserProfileBanner': LazyComponent<typeof import("../components/apps/user-profile/ProfileBanner.vue")['default']>
    'LazyAppsUserProfileBannerOne': LazyComponent<typeof import("../components/apps/user-profile/ProfileBannerOne.vue")['default']>
    'LazyAppsUserProfileProfileOneIntroCard': LazyComponent<typeof import("../components/apps/user-profile/profile-one/IntroCard.vue")['default']>
    'LazyAppsUserProfileProfileOneNumberCards': LazyComponent<typeof import("../components/apps/user-profile/profile-one/NumberCards.vue")['default']>
    'LazyAppsUserProfileProfileOneTeamsCard': LazyComponent<typeof import("../components/apps/user-profile/profile-one/TeamsCard.vue")['default']>
    'LazyAuthLoginForm': LazyComponent<typeof import("../components/auth/LoginForm.vue")['default']>
    'LazyAuthRegisterForm': LazyComponent<typeof import("../components/auth/RegisterForm.vue")['default']>
    'LazyAuthResetForm': LazyComponent<typeof import("../components/auth/ResetForm.vue")['default']>
    'LazyAuthTwoStepForm': LazyComponent<typeof import("../components/auth/TwoStepForm.vue")['default']>
    'LazyCommonBaseEmptyState': LazyComponent<typeof import("../components/common/BaseEmptyState.vue")['default']>
    'LazyCommonBaseModal': LazyComponent<typeof import("../components/common/BaseModal.vue")['default']>
    'LazyCommonBaseSidePicture': LazyComponent<typeof import("../components/common/BaseSidePicture.vue")['default']>
    'LazyCommonLoader': LazyComponent<typeof import("../components/common/Loader.vue")['default']>
    'LazyCommonErrorToaster': LazyComponent<typeof import("../components/common/errorToaster.vue")['default']>
    'LazyCommonSuccessToaster': LazyComponent<typeof import("../components/common/successToaster.vue")['default']>
    'LazyDashboardsDashboardClientAddEventService': LazyComponent<typeof import("../components/dashboards/dashboard-client/AddEventService.vue")['default']>
    'LazyDashboardsDashboardClientCheckList': LazyComponent<typeof import("../components/dashboards/dashboard-client/CheckList.vue")['default']>
    'LazyDashboardsDashboardClientCongratulationsCard': LazyComponent<typeof import("../components/dashboards/dashboard-client/CongratulationsCard.vue")['default']>
    'LazyDashboardsDashboardClientCurrentEvents': LazyComponent<typeof import("../components/dashboards/dashboard-client/CurrentEvents.vue")['default']>
    'LazyDashboardsDashboardClientCustomers': LazyComponent<typeof import("../components/dashboards/dashboard-client/Customers.vue")['default']>
    'LazyDashboardsDashboardClientDateCounter': LazyComponent<typeof import("../components/dashboards/dashboard-client/DateCounter.vue")['default']>
    'LazyDashboardsDashboardClientEventDetails': LazyComponent<typeof import("../components/dashboards/dashboard-client/EventDetails.vue")['default']>
    'LazyDashboardsDashboardClientEvents': LazyComponent<typeof import("../components/dashboards/dashboard-client/Events.vue")['default']>
    'LazyDashboardsDashboardClientLatestDeals': LazyComponent<typeof import("../components/dashboards/dashboard-client/LatestDeals.vue")['default']>
    'LazyDashboardsDashboardClientLatestReviews': LazyComponent<typeof import("../components/dashboards/dashboard-client/LatestReviews.vue")['default']>
    'LazyDashboardsDashboardClientPayments': LazyComponent<typeof import("../components/dashboards/dashboard-client/Payments.vue")['default']>
    'LazyDashboardsDashboardClientPricingChoice': LazyComponent<typeof import("../components/dashboards/dashboard-client/PricingChoice.vue")['default']>
    'LazyDashboardsDashboardClientProductsChart': LazyComponent<typeof import("../components/dashboards/dashboard-client/ProductsChart.vue")['default']>
    'LazyDashboardsDashboardClientProductsTable': LazyComponent<typeof import("../components/dashboards/dashboard-client/ProductsTable.vue")['default']>
    'LazyDashboardsDashboardClientProfessionalProfil': LazyComponent<typeof import("../components/dashboards/dashboard-client/ProfessionalProfil.vue")['default']>
    'LazyDashboardsDashboardClientProjectLeap': LazyComponent<typeof import("../components/dashboards/dashboard-client/ProjectLeap.vue")['default']>
    'LazyDashboardsDashboardClientPropositionsPresta': LazyComponent<typeof import("../components/dashboards/dashboard-client/PropositionsPresta.vue")['default']>
    'LazyDashboardsDashboard2FigmaCard': LazyComponent<typeof import("../components/dashboards/dashboard2/FigmaCard.vue")['default']>
    'LazyDashboardsDashboard2PayingTable': LazyComponent<typeof import("../components/dashboards/dashboard2/PayingTable.vue")['default']>
    'LazyDashboardsDashboard2ProductSales': LazyComponent<typeof import("../components/dashboards/dashboard2/ProductSales.vue")['default']>
    'LazyDashboardsDashboard2ProfessionalMarketPlace': LazyComponent<typeof import("../components/dashboards/dashboard2/ProfessionalMarketPlace.vue")['default']>
    'LazyDashboardsDashboard2ProfileCards': LazyComponent<typeof import("../components/dashboards/dashboard2/ProfileCards.vue")['default']>
    'LazyDashboardsDashboard2ProfitExpanse': LazyComponent<typeof import("../components/dashboards/dashboard2/ProfitExpanse.vue")['default']>
    'LazyDashboardsDashboard2PropositionAccepted': LazyComponent<typeof import("../components/dashboards/dashboard2/PropositionAccepted.vue")['default']>
    'LazyDashboardsDashboard2PropositionDetails': LazyComponent<typeof import("../components/dashboards/dashboard2/PropositionDetails.vue")['default']>
    'LazyDashboardsDashboard2TextCards': LazyComponent<typeof import("../components/dashboards/dashboard2/TextCards.vue")['default']>
    'LazyDashboardsDashboard2TrafficDistribution': LazyComponent<typeof import("../components/dashboards/dashboard2/TrafficDistribution.vue")['default']>
    'LazyDashboardsDashboard2UpcommingSchedule': LazyComponent<typeof import("../components/dashboards/dashboard2/UpcommingSchedule.vue")['default']>
    'LazyDashboardsDashboard2WelcomeCard': LazyComponent<typeof import("../components/dashboards/dashboard2/WelcomeCard.vue")['default']>
    'LazyFormsFormCustomFrom': LazyComponent<typeof import("../components/forms/form-custom/CustomFrom.vue")['default']>
    'LazyFormsFormElementsAutocompleteComboBox': LazyComponent<typeof import("../components/forms/form-elements/autocomplete/ComboBox.vue")['default']>
    'LazyFormsFormElementsAutocompleteMultipleOptions': LazyComponent<typeof import("../components/forms/form-elements/autocomplete/MultipleOptions.vue")['default']>
    'LazyFormsFormElementsAutocompleteWithCaption': LazyComponent<typeof import("../components/forms/form-elements/autocomplete/WithCaption.vue")['default']>
    'LazyFormsFormElementsButtonBaseButtons': LazyComponent<typeof import("../components/forms/form-elements/button/BaseButtons.vue")['default']>
    'LazyFormsFormElementsButtonColorsButtons': LazyComponent<typeof import("../components/forms/form-elements/button/ColorsButtons.vue")['default']>
    'LazyFormsFormElementsButtonIconColor': LazyComponent<typeof import("../components/forms/form-elements/button/IconColor.vue")['default']>
    'LazyFormsFormElementsButtonIconColorSizes': LazyComponent<typeof import("../components/forms/form-elements/button/IconColorSizes.vue")['default']>
    'LazyFormsFormElementsButtonIconsButtons': LazyComponent<typeof import("../components/forms/form-elements/button/IconsButtons.vue")['default']>
    'LazyFormsFormElementsButtonOutlineIconColor': LazyComponent<typeof import("../components/forms/form-elements/button/OutlineIconColor.vue")['default']>
    'LazyFormsFormElementsButtonOutlineSizes': LazyComponent<typeof import("../components/forms/form-elements/button/OutlineSizes.vue")['default']>
    'LazyFormsFormElementsButtonOutlinedButtons': LazyComponent<typeof import("../components/forms/form-elements/button/OutlinedButtons.vue")['default']>
    'LazyFormsFormElementsButtonOutlinedIconSize': LazyComponent<typeof import("../components/forms/form-elements/button/OutlinedIconSize.vue")['default']>
    'LazyFormsFormElementsButtonSizeButtons': LazyComponent<typeof import("../components/forms/form-elements/button/SizeButtons.vue")['default']>
    'LazyFormsFormElementsButtonTextButtons': LazyComponent<typeof import("../components/forms/form-elements/button/TextButtons.vue")['default']>
    'LazyFormsFormElementsButtonButtonGroupDefault': LazyComponent<typeof import("../components/forms/form-elements/button/buttonGroup/Default.vue")['default']>
    'LazyFormsFormElementsButtonButtonGroupOutlined': LazyComponent<typeof import("../components/forms/form-elements/button/buttonGroup/Outlined.vue")['default']>
    'LazyFormsFormElementsButtonButtonGroupPlain': LazyComponent<typeof import("../components/forms/form-elements/button/buttonGroup/Plain.vue")['default']>
    'LazyFormsFormElementsButtonButtonGroupText': LazyComponent<typeof import("../components/forms/form-elements/button/buttonGroup/Text.vue")['default']>
    'LazyFormsFormElementsCheckboxBasicCheckboxes': LazyComponent<typeof import("../components/forms/form-elements/checkbox/BasicCheckboxes.vue")['default']>
    'LazyFormsFormElementsCheckboxColorCheckboxes': LazyComponent<typeof import("../components/forms/form-elements/checkbox/ColorCheckboxes.vue")['default']>
    'LazyFormsFormElementsCheckboxCustomCheckbox': LazyComponent<typeof import("../components/forms/form-elements/checkbox/CustomCheckbox.vue")['default']>
    'LazyFormsFormElementsCheckboxLabelCheckboxes': LazyComponent<typeof import("../components/forms/form-elements/checkbox/LabelCheckboxes.vue")['default']>
    'LazyFormsFormElementsComboboxDense': LazyComponent<typeof import("../components/forms/form-elements/combobox/ComboboxDense.vue")['default']>
    'LazyFormsFormElementsComboboxMultiple': LazyComponent<typeof import("../components/forms/form-elements/combobox/ComboboxMultiple.vue")['default']>
    'LazyFormsFormElementsCustominputInputAppendPrepend': LazyComponent<typeof import("../components/forms/form-elements/custominput/InputAppendPrepend.vue")['default']>
    'LazyFormsFormElementsCustominputInputError': LazyComponent<typeof import("../components/forms/form-elements/custominput/InputError.vue")['default']>
    'LazyFormsFormElementsCustominputInputHideDetails': LazyComponent<typeof import("../components/forms/form-elements/custominput/InputHideDetails.vue")['default']>
    'LazyFormsFormElementsCustominputInputLoading': LazyComponent<typeof import("../components/forms/form-elements/custominput/InputLoading.vue")['default']>
    'LazyFormsFormElementsCustominputInputMultipleError': LazyComponent<typeof import("../components/forms/form-elements/custominput/InputMultipleError.vue")['default']>
    'LazyFormsFormElementsCustominputInputRules': LazyComponent<typeof import("../components/forms/form-elements/custominput/InputRules.vue")['default']>
    'LazyFormsFormElementsDatetimeDatePicker': LazyComponent<typeof import("../components/forms/form-elements/datetime/DatePicker.vue")['default']>
    'LazyFormsFormElementsDatetimeTimePicker': LazyComponent<typeof import("../components/forms/form-elements/datetime/TimePicker.vue")['default']>
    'LazyFormsFormElementsFileinputFileInputAccept': LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputAccept.vue")['default']>
    'LazyFormsFormElementsFileinputFileInputChips': LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputChips.vue")['default']>
    'LazyFormsFormElementsFileinputFileInputCounter': LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputCounter.vue")['default']>
    'LazyFormsFormElementsFileinputFileInputDensity': LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputDensity.vue")['default']>
    'LazyFormsFormElementsFileinputFileInputMultiple': LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputMultiple.vue")['default']>
    'LazyFormsFormElementsFileinputFileInputPrepand': LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputPrepand.vue")['default']>
    'LazyFormsFormElementsFileinputFileInputSelection': LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputSelection.vue")['default']>
    'LazyFormsFormElementsFileinputFileInputValidation': LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputValidation.vue")['default']>
    'LazyFormsFormElementsRadioColor': LazyComponent<typeof import("../components/forms/form-elements/radio/Color.vue")['default']>
    'LazyFormsFormElementsRadioDefault': LazyComponent<typeof import("../components/forms/form-elements/radio/Default.vue")['default']>
    'LazyFormsFormElementsRadioDefaultDirection': LazyComponent<typeof import("../components/forms/form-elements/radio/DefaultDirection.vue")['default']>
    'LazyFormsFormElementsRadioInlineDirection': LazyComponent<typeof import("../components/forms/form-elements/radio/InlineDirection.vue")['default']>
    'LazyFormsFormElementsRadioLabel': LazyComponent<typeof import("../components/forms/form-elements/radio/Label.vue")['default']>
    'LazyFormsFormElementsRadioLabelwithColor': LazyComponent<typeof import("../components/forms/form-elements/radio/LabelwithColor.vue")['default']>
    'LazyFormsFormElementsSelectChip': LazyComponent<typeof import("../components/forms/form-elements/select/SelectChip.vue")['default']>
    'LazyFormsFormElementsSelectDefault': LazyComponent<typeof import("../components/forms/form-elements/select/SelectDefault.vue")['default']>
    'LazyFormsFormElementsSelectDensity': LazyComponent<typeof import("../components/forms/form-elements/select/SelectDensity.vue")['default']>
    'LazyFormsFormElementsSelectMultiple': LazyComponent<typeof import("../components/forms/form-elements/select/SelectMultiple.vue")['default']>
    'LazyFormsFormElementsSelectReadOnly': LazyComponent<typeof import("../components/forms/form-elements/select/SelectReadOnly.vue")['default']>
    'LazyFormsFormElementsSliderCustom': LazyComponent<typeof import("../components/forms/form-elements/slider/Custom.vue")['default']>
    'LazyFormsFormElementsSliderDefault': LazyComponent<typeof import("../components/forms/form-elements/slider/Default.vue")['default']>
    'LazyFormsFormElementsSliderDisabled': LazyComponent<typeof import("../components/forms/form-elements/slider/Disabled.vue")['default']>
    'LazyFormsFormElementsSliderSteps': LazyComponent<typeof import("../components/forms/form-elements/slider/Steps.vue")['default']>
    'LazyFormsFormElementsSliderTickSize': LazyComponent<typeof import("../components/forms/form-elements/slider/TickSize.vue")['default']>
    'LazyFormsFormElementsSliderTicks': LazyComponent<typeof import("../components/forms/form-elements/slider/Ticks.vue")['default']>
    'LazyFormsFormElementsSliderVertical': LazyComponent<typeof import("../components/forms/form-elements/slider/Vertical.vue")['default']>
    'LazyFormsFormElementsSliderVolume': LazyComponent<typeof import("../components/forms/form-elements/slider/Volume.vue")['default']>
    'LazyFormsFormElementsStepperAlternatelabel': LazyComponent<typeof import("../components/forms/form-elements/stepper/Alternatelabel.vue")['default']>
    'LazyFormsFormElementsStepperAlternativeErrors': LazyComponent<typeof import("../components/forms/form-elements/stepper/AlternativeErrors.vue")['default']>
    'LazyFormsFormElementsStepperEditableStepper': LazyComponent<typeof import("../components/forms/form-elements/stepper/EditableStepper.vue")['default']>
    'LazyFormsFormElementsStepperItemStepper': LazyComponent<typeof import("../components/forms/form-elements/stepper/ItemStepper.vue")['default']>
    'LazyFormsFormElementsStepperLinearSteppers': LazyComponent<typeof import("../components/forms/form-elements/stepper/LinearSteppers.vue")['default']>
    'LazyFormsFormElementsStepperNoEditable': LazyComponent<typeof import("../components/forms/form-elements/stepper/NoEditable.vue")['default']>
    'LazyFormsFormElementsStepperOptionalSteps': LazyComponent<typeof import("../components/forms/form-elements/stepper/OptionalSteps.vue")['default']>
    'LazyFormsFormElementsSwitchColors': LazyComponent<typeof import("../components/forms/form-elements/switch/Colors.vue")['default']>
    'LazyFormsFormElementsSwitchDefault': LazyComponent<typeof import("../components/forms/form-elements/switch/Default.vue")['default']>
    'LazyFormsFormElementsSwitchInset': LazyComponent<typeof import("../components/forms/form-elements/switch/Inset.vue")['default']>
    'LazyFormsFormElementsSwitchInsetColors': LazyComponent<typeof import("../components/forms/form-elements/switch/InsetColors.vue")['default']>
    'LazyFormsFormElementsSwitchLabel': LazyComponent<typeof import("../components/forms/form-elements/switch/Label.vue")['default']>
    'LazyFormsFormElementsSwitchStates': LazyComponent<typeof import("../components/forms/form-elements/switch/States.vue")['default']>
    'LazyFormsFormElementsTreeviewActivatable': LazyComponent<typeof import("../components/forms/form-elements/treeview/Activatable.vue")['default']>
    'LazyFormsFormElementsTreeviewBasic': LazyComponent<typeof import("../components/forms/form-elements/treeview/Basic.vue")['default']>
    'LazyFormsFormElementsTreeviewColors': LazyComponent<typeof import("../components/forms/form-elements/treeview/Colors.vue")['default']>
    'LazyFormsFormElementsTreeviewDenseMode': LazyComponent<typeof import("../components/forms/form-elements/treeview/DenseMode.vue")['default']>
    'LazyFormsFormElementsTreeviewOpenAll': LazyComponent<typeof import("../components/forms/form-elements/treeview/OpenAll.vue")['default']>
    'LazyFormsFormHorizontalAccountDetailsTab': LazyComponent<typeof import("../components/forms/form-horizontal/AccountDetailsTab.vue")['default']>
    'LazyFormsFormHorizontalBasicLayout': LazyComponent<typeof import("../components/forms/form-horizontal/BasicLayout.vue")['default']>
    'LazyFormsFormHorizontalBasicWithIcons': LazyComponent<typeof import("../components/forms/form-horizontal/BasicWithIcons.vue")['default']>
    'LazyFormsFormHorizontalCollapsible': LazyComponent<typeof import("../components/forms/form-horizontal/Collapsible.vue")['default']>
    'LazyFormsFormHorizontalFormLabelAlign': LazyComponent<typeof import("../components/forms/form-horizontal/FormLabelAlign.vue")['default']>
    'LazyFormsFormHorizontalFormSeprator': LazyComponent<typeof import("../components/forms/form-horizontal/FormSeprator.vue")['default']>
    'LazyFormsFormHorizontalPersonalInfoTab': LazyComponent<typeof import("../components/forms/form-horizontal/PersonalInfoTab.vue")['default']>
    'LazyFormsFormHorizontalSocialLinksTab': LazyComponent<typeof import("../components/forms/form-horizontal/SocialLinksTab.vue")['default']>
    'LazyFormsFormLayoutsBasicHeaderForm': LazyComponent<typeof import("../components/forms/form-layouts/BasicHeaderForm.vue")['default']>
    'LazyFormsFormLayoutsDefaultForm': LazyComponent<typeof import("../components/forms/form-layouts/DefaultForm.vue")['default']>
    'LazyFormsFormLayoutsDisabledForm': LazyComponent<typeof import("../components/forms/form-layouts/DisabledForm.vue")['default']>
    'LazyFormsFormLayoutsFormLeftIcon': LazyComponent<typeof import("../components/forms/form-layouts/FormLeftIcon.vue")['default']>
    'LazyFormsFormLayoutsFormRightIcon': LazyComponent<typeof import("../components/forms/form-layouts/FormRightIcon.vue")['default']>
    'LazyFormsFormLayoutsInputVarients': LazyComponent<typeof import("../components/forms/form-layouts/InputVarients.vue")['default']>
    'LazyFormsFormLayoutsOrdinaryForm': LazyComponent<typeof import("../components/forms/form-layouts/OrdinaryForm.vue")['default']>
    'LazyFormsFormValidationCheckBox': LazyComponent<typeof import("../components/forms/form-validation/CheckBox.vue")['default']>
    'LazyFormsFormValidationMailValidation': LazyComponent<typeof import("../components/forms/form-validation/MailValidation.vue")['default']>
    'LazyFormsFormValidationOnType': LazyComponent<typeof import("../components/forms/form-validation/OnType.vue")['default']>
    'LazyFormsFormValidationRadio': LazyComponent<typeof import("../components/forms/form-validation/Radio.vue")['default']>
    'LazyFormsFormValidationSelect': LazyComponent<typeof import("../components/forms/form-validation/Select.vue")['default']>
    'LazyFormsFormValidationTextInput': LazyComponent<typeof import("../components/forms/form-validation/TextInput.vue")['default']>
    'LazyFormsFormValidationVeeValidation': LazyComponent<typeof import("../components/forms/form-validation/VeeValidation.vue")['default']>
    'LazyFormsFormVerticalAccountDetailsTab': LazyComponent<typeof import("../components/forms/form-vertical/AccountDetailsTab.vue")['default']>
    'LazyFormsFormVerticalBasicLayout': LazyComponent<typeof import("../components/forms/form-vertical/BasicLayout.vue")['default']>
    'LazyFormsFormVerticalBasicWithIcons': LazyComponent<typeof import("../components/forms/form-vertical/BasicWithIcons.vue")['default']>
    'LazyFormsFormVerticalCollapsible': LazyComponent<typeof import("../components/forms/form-vertical/Collapsible.vue")['default']>
    'LazyFormsFormVerticalFormSeprator': LazyComponent<typeof import("../components/forms/form-vertical/FormSeprator.vue")['default']>
    'LazyFormsFormVerticalPersonalInfoTab': LazyComponent<typeof import("../components/forms/form-vertical/PersonalInfoTab.vue")['default']>
    'LazyFormsFormVerticalSocialLinksTab': LazyComponent<typeof import("../components/forms/form-vertical/SocialLinksTab.vue")['default']>
    'LazyFormsPluginsEditorMenu': LazyComponent<typeof import("../components/forms/plugins/editor/EditorMenu.vue")['default']>
    'LazyFormsPluginsEditorMenubar': LazyComponent<typeof import("../components/forms/plugins/editor/EditorMenubar.vue")['default']>
    'LazyFrontpagesAboutUsArchivement': LazyComponent<typeof import("../components/frontpages/AboutUs/Archivement.vue")['default']>
    'LazyFrontpagesAboutUsHeroText': LazyComponent<typeof import("../components/frontpages/AboutUs/HeroText.vue")['default']>
    'LazyFrontpagesAboutUsSetupProcess': LazyComponent<typeof import("../components/frontpages/AboutUs/SetupProcess.vue")['default']>
    'LazyFrontpagesContactUsContactForm': LazyComponent<typeof import("../components/frontpages/ContactUs/ContactForm.vue")['default']>
    'LazyFrontpagesContactUsContactMap': LazyComponent<typeof import("../components/frontpages/ContactUs/ContactMap.vue")['default']>
    'LazyFrontpagesHomepageClientReviews': LazyComponent<typeof import("../components/frontpages/Homepage/ClientReviews.vue")['default']>
    'LazyFrontpagesHomepageClientTabs': LazyComponent<typeof import("../components/frontpages/Homepage/ClientTabs.vue")['default']>
    'LazyFrontpagesHomepageComponies': LazyComponent<typeof import("../components/frontpages/Homepage/Componies.vue")['default']>
    'LazyFrontpagesHomepageContactBar': LazyComponent<typeof import("../components/frontpages/Homepage/ContactBar.vue")['default']>
    'LazyFrontpagesHomepageFAQ': LazyComponent<typeof import("../components/frontpages/Homepage/FAQ.vue")['default']>
    'LazyFrontpagesHomepageFeatureTabs': LazyComponent<typeof import("../components/frontpages/Homepage/FeatureTabs.vue")['default']>
    'LazyFrontpagesHomepageHighlights': LazyComponent<typeof import("../components/frontpages/Homepage/Highlights.vue")['default']>
    'LazyFrontpagesHomepageMainbanner': LazyComponent<typeof import("../components/frontpages/Homepage/Mainbanner.vue")['default']>
    'LazyFrontpagesHomepageOurClients': LazyComponent<typeof import("../components/frontpages/Homepage/OurClients.vue")['default']>
    'LazyFrontpagesHomepageOurTeam': LazyComponent<typeof import("../components/frontpages/Homepage/OurTeam.vue")['default']>
    'LazyFrontpagesHomepagePackages': LazyComponent<typeof import("../components/frontpages/Homepage/Packages.vue")['default']>
    'LazyFrontpagesHomepageProfessionalTabs': LazyComponent<typeof import("../components/frontpages/Homepage/ProfessionalTabs.vue")['default']>
    'LazyFrontpagesHomepagePurchaseTemplate': LazyComponent<typeof import("../components/frontpages/Homepage/PurchaseTemplate.vue")['default']>
    'LazyFrontpagesHomepageSecurePayment': LazyComponent<typeof import("../components/frontpages/Homepage/SecurePayment.vue")['default']>
    'LazyFrontpagesSharedTextBannerCard': LazyComponent<typeof import("../components/frontpages/Shared/TextBannerCard.vue")['default']>
    'LazyFrontpagesLayoutAnnounceBar': LazyComponent<typeof import("../components/frontpages/layout/AnnounceBar.vue")['default']>
    'LazyFrontpagesLayoutFooter': LazyComponent<typeof import("../components/frontpages/layout/Footer.vue")['default']>
    'LazyFrontpagesLayoutHeader': LazyComponent<typeof import("../components/frontpages/layout/Header.vue")['default']>
    'LazyFrontpagesLayoutNavigation': LazyComponent<typeof import("../components/frontpages/layout/Navigation.vue")['default']>
    'LazyJuridiqueCharteBonneConduite': LazyComponent<typeof import("../components/juridique/CharteBonneConduite.vue")['default']>
    'LazyLandingpageLayoutFooter': LazyComponent<typeof import("../components/landingpage/layout/Footer.vue")['default']>
    'LazyLandingpageLayoutHeader': LazyComponent<typeof import("../components/landingpage/layout/Header.vue")['default']>
    'LazyLandingpageLayoutMobileSidebar': LazyComponent<typeof import("../components/landingpage/layout/MobileSidebar.vue")['default']>
    'LazyLandingpageLayoutNavigation': LazyComponent<typeof import("../components/landingpage/layout/Navigation.vue")['default']>
    'LazyLandingpageLayoutPageMegamenu': LazyComponent<typeof import("../components/landingpage/layout/PageMegamenu.vue")['default']>
    'LazyLandingpageLayoutPageMenuQuicklinks': LazyComponent<typeof import("../components/landingpage/layout/PageMenuQuicklinks.vue")['default']>
    'LazyLandingpageSectionPurchase': LazyComponent<typeof import("../components/landingpage/section/Purchase.vue")['default']>
    'LazyLandingpageSectionRevolution': LazyComponent<typeof import("../components/landingpage/section/Revolution.vue")['default']>
    'LazyLandingpageSectionOtherFeatures': LazyComponent<typeof import("../components/landingpage/section/otherFeatures.vue")['default']>
    'LazyLandingpageSectionOurProducts': LazyComponent<typeof import("../components/landingpage/section/ourProducts.vue")['default']>
    'LazyLandingpageSectionUserReview': LazyComponent<typeof import("../components/landingpage/section/userReview.vue")['default']>
    'LazyLcFullCustomizer': LazyComponent<typeof import("../components/lc/Full/customizer/Customizer.vue")['default']>
    'LazyLcFullHorizontalHeader': LazyComponent<typeof import("../components/lc/Full/horizontal-header/index.vue")['default']>
    'LazyLcFullHorizontalSidebarNavCollapse': LazyComponent<typeof import("../components/lc/Full/horizontal-sidebar/NavCollapse/Index.vue")['default']>
    'LazyLcFullHorizontalSidebarNavItem': LazyComponent<typeof import("../components/lc/Full/horizontal-sidebar/NavItem/Index.vue")['default']>
    'LazyLcFullHorizontalSidebarHorizontalItems': LazyComponent<typeof import("../components/lc/Full/horizontal-sidebar/horizontalItems")['default']>
    'LazyLcFullHorizontalSidebar': LazyComponent<typeof import("../components/lc/Full/horizontal-sidebar/index.vue")['default']>
    'LazyLcFullVerticalHeaderAppsLink': LazyComponent<typeof import("../components/lc/Full/vertical-header/AppsLink.vue")['default']>
    'LazyLcFullVerticalHeaderNavigations': LazyComponent<typeof import("../components/lc/Full/vertical-header/Navigations.vue")['default']>
    'LazyLcFullVerticalHeaderNotificationDD': LazyComponent<typeof import("../components/lc/Full/vertical-header/NotificationDD.vue")['default']>
    'LazyLcFullVerticalHeaderProfileDD': LazyComponent<typeof import("../components/lc/Full/vertical-header/ProfileDD.vue")['default']>
    'LazyLcFullVerticalHeaderQuickLinks': LazyComponent<typeof import("../components/lc/Full/vertical-header/QuickLinks.vue")['default']>
    'LazyLcFullVerticalHeaderRightMobileSidebar': LazyComponent<typeof import("../components/lc/Full/vertical-header/RightMobileSidebar.vue")['default']>
    'LazyLcFullVerticalHeaderSearchbar': LazyComponent<typeof import("../components/lc/Full/vertical-header/Searchbar.vue")['default']>
    'LazyLcFullVerticalHeaderThemeToggler': LazyComponent<typeof import("../components/lc/Full/vertical-header/ThemeToggler.vue")['default']>
    'LazyLcFullVerticalHeader': LazyComponent<typeof import("../components/lc/Full/vertical-header/index.vue")['default']>
    'LazyLcFullVerticalSidebarDropDown': LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/DropDown/index.vue")['default']>
    'LazyLcFullVerticalSidebarIcon': LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/Icon.vue")['default']>
    'LazyLcFullVerticalSidebarMoreOption': LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/MoreOption/index.vue")['default']>
    'LazyLcFullVerticalSidebarNavCollapse': LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/NavCollapse/index.vue")['default']>
    'LazyLcFullVerticalSidebarNavGroup': LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/NavGroup/index.vue")['default']>
    'LazyLcFullVerticalSidebarNavItem': LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/NavItem/index.vue")['default']>
    'LazyLcFullVerticalSidebarExtrabox': LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/extrabox/index.vue")['default']>
    'LazyLcFullVerticalSidebar': LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/index.vue")['default']>
    'LazyLcFullVerticalSidebarItem': LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/sidebarItem")['default']>
    'LazyPagesAccountSettingsAccountTab': LazyComponent<typeof import("../components/pages/account-settings/AccountTab.vue")['default']>
    'LazyPagesAccountSettingsBillsTab': LazyComponent<typeof import("../components/pages/account-settings/BillsTab.vue")['default']>
    'LazyPagesAccountSettingsNotificationTab': LazyComponent<typeof import("../components/pages/account-settings/NotificationTab.vue")['default']>
    'LazyPagesAccountSettingsSecurityTab': LazyComponent<typeof import("../components/pages/account-settings/SecurityTab.vue")['default']>
    'LazyPagesFaqQuestion': LazyComponent<typeof import("../components/pages/faq/FaqQuestion.vue")['default']>
    'LazyPagesFaqStillHaveQuestions': LazyComponent<typeof import("../components/pages/faq/StillHaveQuestions.vue")['default']>
    'LazyPagesSearchResultsSearchLinks': LazyComponent<typeof import("../components/pages/search-results/SearchLinks.vue")['default']>
    'LazyQuestionnairesCustomerForm': LazyComponent<typeof import("../components/questionnaires/CustomerForm.vue")['default']>
    'LazyQuestionnairesDynamicFormDialog': LazyComponent<typeof import("../components/questionnaires/DynamicFormDialog.vue")['default']>
    'LazyQuestionnairesFormField': LazyComponent<typeof import("../components/questionnaires/FormField.vue")['default']>
    'LazyQuestionnairesSectionController': LazyComponent<typeof import("../components/questionnaires/SectionController.vue")['default']>
    'LazyQuestionnairesServicesPrestataire': LazyComponent<typeof import("../components/questionnaires/ServicesPrestataire.vue")['default']>
    'LazyQuestionnairesValidationError': LazyComponent<typeof import("../components/questionnaires/ValidationError.vue")['default']>
    'LazySharedAppBaseCard': LazyComponent<typeof import("../components/shared/AppBaseCard.vue")['default']>
    'LazySharedAppEmailCard': LazyComponent<typeof import("../components/shared/AppEmailCard.vue")['default']>
    'LazySharedBaseBreadcrumb': LazyComponent<typeof import("../components/shared/BaseBreadcrumb.vue")['default']>
    'LazySharedBaseCard': LazyComponent<typeof import("../components/shared/BaseCard.vue")['default']>
    'LazySharedCardHeaderFooter': LazyComponent<typeof import("../components/shared/CardHeaderFooter.vue")['default']>
    'LazySharedProductBaseCard': LazyComponent<typeof import("../components/shared/ProductBaseCard.vue")['default']>
    'LazySharedUiChildCard': LazyComponent<typeof import("../components/shared/UiChildCard.vue")['default']>
    'LazySharedUiParentCard': LazyComponent<typeof import("../components/shared/UiParentCard.vue")['default']>
    'LazySharedUiParentCardLogo': LazyComponent<typeof import("../components/shared/UiParentCardLogo.vue")['default']>
    'LazySharedUiTableCard': LazyComponent<typeof import("../components/shared/UiTableCard.vue")['default']>
    'LazySharedUiTextfieldPrimary': LazyComponent<typeof import("../components/shared/UiTextfieldPrimary.vue")['default']>
    'LazySharedUiTittleSubtitleCard': LazyComponent<typeof import("../components/shared/UiTittleSubtitleCard.vue")['default']>
    'LazySharedWidgetCard': LazyComponent<typeof import("../components/shared/WidgetCard.vue")['default']>
    'LazySharedWidgetCardv2': LazyComponent<typeof import("../components/shared/WidgetCardv2.vue")['default']>
    'LazySharedECommerceCard': LazyComponent<typeof import("../components/shared/eCommerceCard.vue")['default']>
    'LazyStyleComponentsTypographyDefaultText': LazyComponent<typeof import("../components/style-components/typography/DefaultText.vue")['default']>
    'LazyStyleComponentsTypographyHeading': LazyComponent<typeof import("../components/style-components/typography/Heading.vue")['default']>
    'LazyStyleComponentsTypographyOpacity': LazyComponent<typeof import("../components/style-components/typography/Opacity.vue")['default']>
    'LazyStyleComponentsTypographyTextAlignment': LazyComponent<typeof import("../components/style-components/typography/TextAlignment.vue")['default']>
    'LazyStyleComponentsTypographyTextDecoration': LazyComponent<typeof import("../components/style-components/typography/TextDecoration.vue")['default']>
    'LazyTableTable1': LazyComponent<typeof import("../components/table/Table1.vue")['default']>
    'LazyTableTable2': LazyComponent<typeof import("../components/table/Table2.vue")['default']>
    'LazyTableTable3': LazyComponent<typeof import("../components/table/Table3.vue")['default']>
    'LazyTableTable4': LazyComponent<typeof import("../components/table/Table4.vue")['default']>
    'LazyTableTable5': LazyComponent<typeof import("../components/table/Table5.vue")['default']>
    'LazyUiComponentsAlertAction': LazyComponent<typeof import("../components/ui-components/alert/Action.vue")['default']>
    'LazyUiComponentsAlertBasic': LazyComponent<typeof import("../components/ui-components/alert/Basic.vue")['default']>
    'LazyUiComponentsAlertClosable': LazyComponent<typeof import("../components/ui-components/alert/Closable.vue")['default']>
    'LazyUiComponentsAlertDescription': LazyComponent<typeof import("../components/ui-components/alert/Description.vue")['default']>
    'LazyUiComponentsAlertFilled': LazyComponent<typeof import("../components/ui-components/alert/Filled.vue")['default']>
    'LazyUiComponentsAlertIcons': LazyComponent<typeof import("../components/ui-components/alert/Icons.vue")['default']>
    'LazyUiComponentsAlertOutlined': LazyComponent<typeof import("../components/ui-components/alert/Outlined.vue")['default']>
    'LazyUiComponentsAvatarBasicAvatar': LazyComponent<typeof import("../components/ui-components/avatar/BasicAvatar.vue")['default']>
    'LazyUiComponentsAvatarIconAvatar': LazyComponent<typeof import("../components/ui-components/avatar/IconAvatar.vue")['default']>
    'LazyUiComponentsAvatarImageAvatar': LazyComponent<typeof import("../components/ui-components/avatar/ImageAvatar.vue")['default']>
    'LazyUiComponentsAvatarLetterAvatar': LazyComponent<typeof import("../components/ui-components/avatar/LetterAvatar.vue")['default']>
    'LazyUiComponentsAvatarSizeAvatar': LazyComponent<typeof import("../components/ui-components/avatar/SizeAvatar.vue")['default']>
    'LazyUiComponentsAvatarVariantAvatar': LazyComponent<typeof import("../components/ui-components/avatar/VariantAvatar.vue")['default']>
    'LazyUiComponentsChipClosable': LazyComponent<typeof import("../components/ui-components/chip/Closable.vue")['default']>
    'LazyUiComponentsChipCustomIcon': LazyComponent<typeof import("../components/ui-components/chip/CustomIcon.vue")['default']>
    'LazyUiComponentsChipCustomIconOutlined': LazyComponent<typeof import("../components/ui-components/chip/CustomIconOutlined.vue")['default']>
    'LazyUiComponentsChipDisabled': LazyComponent<typeof import("../components/ui-components/chip/Disabled.vue")['default']>
    'LazyUiComponentsChipFilledColor': LazyComponent<typeof import("../components/ui-components/chip/FilledColor.vue")['default']>
    'LazyUiComponentsChipLabelChip': LazyComponent<typeof import("../components/ui-components/chip/LabelChip.vue")['default']>
    'LazyUiComponentsChipOutlined': LazyComponent<typeof import("../components/ui-components/chip/Outlined.vue")['default']>
    'LazyUiComponentsChipSizes': LazyComponent<typeof import("../components/ui-components/chip/Sizes.vue")['default']>
    'LazyUiComponentsDialogsActivator': LazyComponent<typeof import("../components/ui-components/dialogs/DialogsActivator.vue")['default']>
    'LazyUiComponentsDialogsForm': LazyComponent<typeof import("../components/ui-components/dialogs/DialogsForm.vue")['default']>
    'LazyUiComponentsDialogsFullscreen': LazyComponent<typeof import("../components/ui-components/dialogs/DialogsFullscreen.vue")['default']>
    'LazyUiComponentsDialogsModel': LazyComponent<typeof import("../components/ui-components/dialogs/DialogsModel.vue")['default']>
    'LazyUiComponentsDialogsNested': LazyComponent<typeof import("../components/ui-components/dialogs/DialogsNested.vue")['default']>
    'LazyUiComponentsDialogsPersistent': LazyComponent<typeof import("../components/ui-components/dialogs/DialogsPersistent.vue")['default']>
    'LazyUiComponentsDialogsScrollable': LazyComponent<typeof import("../components/ui-components/dialogs/DialogsScrollable.vue")['default']>
    'LazyUiComponentsDialogsTransitions': LazyComponent<typeof import("../components/ui-components/dialogs/DialogsTransitions.vue")['default']>
    'LazyUiComponentsExpansionpanelAdvance': LazyComponent<typeof import("../components/ui-components/expansionpanel/Advance.vue")['default']>
    'LazyUiComponentsExpansionpanelBasic': LazyComponent<typeof import("../components/ui-components/expansionpanel/Basic.vue")['default']>
    'LazyUiComponentsExpansionpanelCustomizedIcon': LazyComponent<typeof import("../components/ui-components/expansionpanel/CustomizedIcon.vue")['default']>
    'LazyUiComponentsExpansionpanelDefaultExpand': LazyComponent<typeof import("../components/ui-components/expansionpanel/DefaultExpand.vue")['default']>
    'LazyUiComponentsExpansionpanelInset': LazyComponent<typeof import("../components/ui-components/expansionpanel/Inset.vue")['default']>
    'LazyUiComponentsExpansionpanelPopout': LazyComponent<typeof import("../components/ui-components/expansionpanel/Popout.vue")['default']>
    'LazyUiComponentsListCustomAlignList': LazyComponent<typeof import("../components/ui-components/list/CustomAlignList.vue")['default']>
    'LazyUiComponentsListDisabledList': LazyComponent<typeof import("../components/ui-components/list/DisabledList.vue")['default']>
    'LazyUiComponentsListFolderList': LazyComponent<typeof import("../components/ui-components/list/FolderList.vue")['default']>
    'LazyUiComponentsListNestedList': LazyComponent<typeof import("../components/ui-components/list/NestedList.vue")['default']>
    'LazyUiComponentsListRoundedList': LazyComponent<typeof import("../components/ui-components/list/RoundedList.vue")['default']>
    'LazyUiComponentsListScrollableList': LazyComponent<typeof import("../components/ui-components/list/ScrollableList.vue")['default']>
    'LazyUiComponentsListSimpleList': LazyComponent<typeof import("../components/ui-components/list/SimpleList.vue")['default']>
    'LazyUiComponentsListSwitchList': LazyComponent<typeof import("../components/ui-components/list/SwitchList.vue")['default']>
    'LazyUiComponentsMenusActivatorTooltip': LazyComponent<typeof import("../components/ui-components/menus/MenusActivatorTooltip.vue")['default']>
    'LazyUiComponentsMenusAnchor': LazyComponent<typeof import("../components/ui-components/menus/MenusAnchor.vue")['default']>
    'LazyUiComponentsMenusHover': LazyComponent<typeof import("../components/ui-components/menus/MenusHover.vue")['default']>
    'LazyUiComponentsMenusPopover': LazyComponent<typeof import("../components/ui-components/menus/MenusPopover.vue")['default']>
    'LazyUiComponentsRattingBasicRatting': LazyComponent<typeof import("../components/ui-components/ratting/BasicRatting.vue")['default']>
    'LazyUiComponentsRattingClearableRatting': LazyComponent<typeof import("../components/ui-components/ratting/ClearableRatting.vue")['default']>
    'LazyUiComponentsRattingHalfRatting': LazyComponent<typeof import("../components/ui-components/ratting/HalfRatting.vue")['default']>
    'LazyUiComponentsRattingHoverRatting': LazyComponent<typeof import("../components/ui-components/ratting/HoverRatting.vue")['default']>
    'LazyUiComponentsRattingIconsRatting': LazyComponent<typeof import("../components/ui-components/ratting/IconsRatting.vue")['default']>
    'LazyUiComponentsRattingLabelRatting': LazyComponent<typeof import("../components/ui-components/ratting/LabelRatting.vue")['default']>
    'LazyUiComponentsRattingLengthRatting': LazyComponent<typeof import("../components/ui-components/ratting/LengthRatting.vue")['default']>
    'LazyUiComponentsRattingReadOnlyRatting': LazyComponent<typeof import("../components/ui-components/ratting/ReadOnlyRatting.vue")['default']>
    'LazyUiComponentsRattingSizeRatting': LazyComponent<typeof import("../components/ui-components/ratting/SizeRatting.vue")['default']>
    'LazyUiComponentsTabsAlignCenterTabs': LazyComponent<typeof import("../components/ui-components/tabs/AlignCenterTabs.vue")['default']>
    'LazyUiComponentsTabsAlignEndTabs': LazyComponent<typeof import("../components/ui-components/tabs/AlignEndTabs.vue")['default']>
    'LazyUiComponentsTabsBasicTabs': LazyComponent<typeof import("../components/ui-components/tabs/BasicTabs.vue")['default']>
    'LazyUiComponentsTabsCenterTabs': LazyComponent<typeof import("../components/ui-components/tabs/CenterTabs.vue")['default']>
    'LazyUiComponentsTabsColorTabs': LazyComponent<typeof import("../components/ui-components/tabs/ColorTabs.vue")['default']>
    'LazyUiComponentsTabsCustomIcons': LazyComponent<typeof import("../components/ui-components/tabs/CustomIcons.vue")['default']>
    'LazyUiComponentsTabsDisableTabs': LazyComponent<typeof import("../components/ui-components/tabs/DisableTabs.vue")['default']>
    'LazyUiComponentsTabsIconTabs': LazyComponent<typeof import("../components/ui-components/tabs/IconTabs.vue")['default']>
    'LazyUiComponentsTabsIconsWithLabelTabs': LazyComponent<typeof import("../components/ui-components/tabs/IconsWithLabelTabs.vue")['default']>
    'LazyUiComponentsTooltipIconTooltip': LazyComponent<typeof import("../components/ui-components/tooltip/IconTooltip.vue")['default']>
    'LazyUiComponentsTooltipSimpleTooltip': LazyComponent<typeof import("../components/ui-components/tooltip/SimpleTooltip.vue")['default']>
    'LazyUiComponentsTooltipToggleTolltip': LazyComponent<typeof import("../components/ui-components/tooltip/ToggleTolltip.vue")['default']>
    'LazyWidgetsBannersBanner1': LazyComponent<typeof import("../components/widgets/banners/Banner1.vue")['default']>
    'LazyWidgetsBannersBanner2': LazyComponent<typeof import("../components/widgets/banners/Banner2.vue")['default']>
    'LazyWidgetsBannersBanner3': LazyComponent<typeof import("../components/widgets/banners/Banner3.vue")['default']>
    'LazyWidgetsBannersBanner4': LazyComponent<typeof import("../components/widgets/banners/Banner4.vue")['default']>
    'LazyWidgetsBannersBanner5': LazyComponent<typeof import("../components/widgets/banners/Banner5.vue")['default']>
    'LazyWidgetsBannersBanner6': LazyComponent<typeof import("../components/widgets/banners/Banner6.vue")['default']>
    'LazyWidgetsCardsCongtsCard': LazyComponent<typeof import("../components/widgets/cards/CongtsCard.vue")['default']>
    'LazyWidgetsCardsPaymentGateway': LazyComponent<typeof import("../components/widgets/cards/PaymentGateway.vue")['default']>
    'LazyWidgetsCardsProfileBoxCards': LazyComponent<typeof import("../components/widgets/cards/ProfileBoxCards.vue")['default']>
    'LazyWidgetsCardsRecentTransactions': LazyComponent<typeof import("../components/widgets/cards/RecentTransactions.vue")['default']>
    'LazyWidgetsCardsTopCards': LazyComponent<typeof import("../components/widgets/cards/TopCards.vue")['default']>
    'LazyWidgetsChartsNetSells': LazyComponent<typeof import("../components/widgets/charts/NetSells.vue")['default']>
    'LazyWidgetsChartsPayingChart': LazyComponent<typeof import("../components/widgets/charts/PayingChart.vue")['default']>
    'LazyWidgetsChartsTraficDistributionChart': LazyComponent<typeof import("../components/widgets/charts/TraficDistributionChart.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppsEcommerceCartCheckout: typeof import("../components/apps/ecommerce/cart/CartCheckout.vue")['default']
export const AppsEcommerceCartEmpty: typeof import("../components/apps/ecommerce/cart/CartEmpty.vue")['default']
export const AppsEcommerceCartStepsAddAddress: typeof import("../components/apps/ecommerce/cart/steps/AddAddress.vue")['default']
export const AppsEcommerceCartStepsAddCard: typeof import("../components/apps/ecommerce/cart/steps/AddCard.vue")['default']
export const AppsEcommerceCartStepsAddressCard: typeof import("../components/apps/ecommerce/cart/steps/AddressCard.vue")['default']
export const AppsEcommerceCartStepsOrderSummary: typeof import("../components/apps/ecommerce/cart/steps/OrderSummary.vue")['default']
export const AppsEcommerceCartStepsPayment: typeof import("../components/apps/ecommerce/cart/steps/Payment.vue")['default']
export const AppsEcommerceCartStepsStepFirst: typeof import("../components/apps/ecommerce/cart/steps/StepFirst.vue")['default']
export const AppsEcommerceCartStepsStepSecond: typeof import("../components/apps/ecommerce/cart/steps/StepSecond.vue")['default']
export const AppsEcommerceCartStepsTestStripe: typeof import("../components/apps/ecommerce/cart/steps/TestStripe.vue")['default']
export const AppsEcommerceCartStepsThankyou: typeof import("../components/apps/ecommerce/cart/steps/Thankyou.vue")['default']
export const AppsNotesAddNote: typeof import("../components/apps/notes/AddNote.vue")['default']
export const AppsNotesContent: typeof import("../components/apps/notes/NotesContent.vue")['default']
export const AppsNotesListing: typeof import("../components/apps/notes/NotesListing.vue")['default']
export const AppsUserProfileEditClientProfil: typeof import("../components/apps/user-profile/EditClientProfil.vue")['default']
export const AppsUserProfileEditProfessionalProfil: typeof import("../components/apps/user-profile/EditProfessionalProfil.vue")['default']
export const AppsUserProfileIntroCard: typeof import("../components/apps/user-profile/IntroCard.vue")['default']
export const AppsUserProfileModalRedirection: typeof import("../components/apps/user-profile/ModalRedirection.vue")['default']
export const AppsUserProfileBanner: typeof import("../components/apps/user-profile/ProfileBanner.vue")['default']
export const AppsUserProfileBannerOne: typeof import("../components/apps/user-profile/ProfileBannerOne.vue")['default']
export const AppsUserProfileProfileOneIntroCard: typeof import("../components/apps/user-profile/profile-one/IntroCard.vue")['default']
export const AppsUserProfileProfileOneNumberCards: typeof import("../components/apps/user-profile/profile-one/NumberCards.vue")['default']
export const AppsUserProfileProfileOneTeamsCard: typeof import("../components/apps/user-profile/profile-one/TeamsCard.vue")['default']
export const AuthLoginForm: typeof import("../components/auth/LoginForm.vue")['default']
export const AuthRegisterForm: typeof import("../components/auth/RegisterForm.vue")['default']
export const AuthResetForm: typeof import("../components/auth/ResetForm.vue")['default']
export const AuthTwoStepForm: typeof import("../components/auth/TwoStepForm.vue")['default']
export const CommonBaseEmptyState: typeof import("../components/common/BaseEmptyState.vue")['default']
export const CommonBaseModal: typeof import("../components/common/BaseModal.vue")['default']
export const CommonBaseSidePicture: typeof import("../components/common/BaseSidePicture.vue")['default']
export const CommonLoader: typeof import("../components/common/Loader.vue")['default']
export const CommonErrorToaster: typeof import("../components/common/errorToaster.vue")['default']
export const CommonSuccessToaster: typeof import("../components/common/successToaster.vue")['default']
export const DashboardsDashboardClientAddEventService: typeof import("../components/dashboards/dashboard-client/AddEventService.vue")['default']
export const DashboardsDashboardClientCheckList: typeof import("../components/dashboards/dashboard-client/CheckList.vue")['default']
export const DashboardsDashboardClientCongratulationsCard: typeof import("../components/dashboards/dashboard-client/CongratulationsCard.vue")['default']
export const DashboardsDashboardClientCurrentEvents: typeof import("../components/dashboards/dashboard-client/CurrentEvents.vue")['default']
export const DashboardsDashboardClientCustomers: typeof import("../components/dashboards/dashboard-client/Customers.vue")['default']
export const DashboardsDashboardClientDateCounter: typeof import("../components/dashboards/dashboard-client/DateCounter.vue")['default']
export const DashboardsDashboardClientEventDetails: typeof import("../components/dashboards/dashboard-client/EventDetails.vue")['default']
export const DashboardsDashboardClientEvents: typeof import("../components/dashboards/dashboard-client/Events.vue")['default']
export const DashboardsDashboardClientLatestDeals: typeof import("../components/dashboards/dashboard-client/LatestDeals.vue")['default']
export const DashboardsDashboardClientLatestReviews: typeof import("../components/dashboards/dashboard-client/LatestReviews.vue")['default']
export const DashboardsDashboardClientPayments: typeof import("../components/dashboards/dashboard-client/Payments.vue")['default']
export const DashboardsDashboardClientPricingChoice: typeof import("../components/dashboards/dashboard-client/PricingChoice.vue")['default']
export const DashboardsDashboardClientProductsChart: typeof import("../components/dashboards/dashboard-client/ProductsChart.vue")['default']
export const DashboardsDashboardClientProductsTable: typeof import("../components/dashboards/dashboard-client/ProductsTable.vue")['default']
export const DashboardsDashboardClientProfessionalProfil: typeof import("../components/dashboards/dashboard-client/ProfessionalProfil.vue")['default']
export const DashboardsDashboardClientProjectLeap: typeof import("../components/dashboards/dashboard-client/ProjectLeap.vue")['default']
export const DashboardsDashboardClientPropositionsPresta: typeof import("../components/dashboards/dashboard-client/PropositionsPresta.vue")['default']
export const DashboardsDashboard2FigmaCard: typeof import("../components/dashboards/dashboard2/FigmaCard.vue")['default']
export const DashboardsDashboard2PayingTable: typeof import("../components/dashboards/dashboard2/PayingTable.vue")['default']
export const DashboardsDashboard2ProductSales: typeof import("../components/dashboards/dashboard2/ProductSales.vue")['default']
export const DashboardsDashboard2ProfessionalMarketPlace: typeof import("../components/dashboards/dashboard2/ProfessionalMarketPlace.vue")['default']
export const DashboardsDashboard2ProfileCards: typeof import("../components/dashboards/dashboard2/ProfileCards.vue")['default']
export const DashboardsDashboard2ProfitExpanse: typeof import("../components/dashboards/dashboard2/ProfitExpanse.vue")['default']
export const DashboardsDashboard2PropositionAccepted: typeof import("../components/dashboards/dashboard2/PropositionAccepted.vue")['default']
export const DashboardsDashboard2PropositionDetails: typeof import("../components/dashboards/dashboard2/PropositionDetails.vue")['default']
export const DashboardsDashboard2TextCards: typeof import("../components/dashboards/dashboard2/TextCards.vue")['default']
export const DashboardsDashboard2TrafficDistribution: typeof import("../components/dashboards/dashboard2/TrafficDistribution.vue")['default']
export const DashboardsDashboard2UpcommingSchedule: typeof import("../components/dashboards/dashboard2/UpcommingSchedule.vue")['default']
export const DashboardsDashboard2WelcomeCard: typeof import("../components/dashboards/dashboard2/WelcomeCard.vue")['default']
export const FormsFormCustomFrom: typeof import("../components/forms/form-custom/CustomFrom.vue")['default']
export const FormsFormElementsAutocompleteComboBox: typeof import("../components/forms/form-elements/autocomplete/ComboBox.vue")['default']
export const FormsFormElementsAutocompleteMultipleOptions: typeof import("../components/forms/form-elements/autocomplete/MultipleOptions.vue")['default']
export const FormsFormElementsAutocompleteWithCaption: typeof import("../components/forms/form-elements/autocomplete/WithCaption.vue")['default']
export const FormsFormElementsButtonBaseButtons: typeof import("../components/forms/form-elements/button/BaseButtons.vue")['default']
export const FormsFormElementsButtonColorsButtons: typeof import("../components/forms/form-elements/button/ColorsButtons.vue")['default']
export const FormsFormElementsButtonIconColor: typeof import("../components/forms/form-elements/button/IconColor.vue")['default']
export const FormsFormElementsButtonIconColorSizes: typeof import("../components/forms/form-elements/button/IconColorSizes.vue")['default']
export const FormsFormElementsButtonIconsButtons: typeof import("../components/forms/form-elements/button/IconsButtons.vue")['default']
export const FormsFormElementsButtonOutlineIconColor: typeof import("../components/forms/form-elements/button/OutlineIconColor.vue")['default']
export const FormsFormElementsButtonOutlineSizes: typeof import("../components/forms/form-elements/button/OutlineSizes.vue")['default']
export const FormsFormElementsButtonOutlinedButtons: typeof import("../components/forms/form-elements/button/OutlinedButtons.vue")['default']
export const FormsFormElementsButtonOutlinedIconSize: typeof import("../components/forms/form-elements/button/OutlinedIconSize.vue")['default']
export const FormsFormElementsButtonSizeButtons: typeof import("../components/forms/form-elements/button/SizeButtons.vue")['default']
export const FormsFormElementsButtonTextButtons: typeof import("../components/forms/form-elements/button/TextButtons.vue")['default']
export const FormsFormElementsButtonButtonGroupDefault: typeof import("../components/forms/form-elements/button/buttonGroup/Default.vue")['default']
export const FormsFormElementsButtonButtonGroupOutlined: typeof import("../components/forms/form-elements/button/buttonGroup/Outlined.vue")['default']
export const FormsFormElementsButtonButtonGroupPlain: typeof import("../components/forms/form-elements/button/buttonGroup/Plain.vue")['default']
export const FormsFormElementsButtonButtonGroupText: typeof import("../components/forms/form-elements/button/buttonGroup/Text.vue")['default']
export const FormsFormElementsCheckboxBasicCheckboxes: typeof import("../components/forms/form-elements/checkbox/BasicCheckboxes.vue")['default']
export const FormsFormElementsCheckboxColorCheckboxes: typeof import("../components/forms/form-elements/checkbox/ColorCheckboxes.vue")['default']
export const FormsFormElementsCheckboxCustomCheckbox: typeof import("../components/forms/form-elements/checkbox/CustomCheckbox.vue")['default']
export const FormsFormElementsCheckboxLabelCheckboxes: typeof import("../components/forms/form-elements/checkbox/LabelCheckboxes.vue")['default']
export const FormsFormElementsComboboxDense: typeof import("../components/forms/form-elements/combobox/ComboboxDense.vue")['default']
export const FormsFormElementsComboboxMultiple: typeof import("../components/forms/form-elements/combobox/ComboboxMultiple.vue")['default']
export const FormsFormElementsCustominputInputAppendPrepend: typeof import("../components/forms/form-elements/custominput/InputAppendPrepend.vue")['default']
export const FormsFormElementsCustominputInputError: typeof import("../components/forms/form-elements/custominput/InputError.vue")['default']
export const FormsFormElementsCustominputInputHideDetails: typeof import("../components/forms/form-elements/custominput/InputHideDetails.vue")['default']
export const FormsFormElementsCustominputInputLoading: typeof import("../components/forms/form-elements/custominput/InputLoading.vue")['default']
export const FormsFormElementsCustominputInputMultipleError: typeof import("../components/forms/form-elements/custominput/InputMultipleError.vue")['default']
export const FormsFormElementsCustominputInputRules: typeof import("../components/forms/form-elements/custominput/InputRules.vue")['default']
export const FormsFormElementsDatetimeDatePicker: typeof import("../components/forms/form-elements/datetime/DatePicker.vue")['default']
export const FormsFormElementsDatetimeTimePicker: typeof import("../components/forms/form-elements/datetime/TimePicker.vue")['default']
export const FormsFormElementsFileinputFileInputAccept: typeof import("../components/forms/form-elements/fileinput/FileInputAccept.vue")['default']
export const FormsFormElementsFileinputFileInputChips: typeof import("../components/forms/form-elements/fileinput/FileInputChips.vue")['default']
export const FormsFormElementsFileinputFileInputCounter: typeof import("../components/forms/form-elements/fileinput/FileInputCounter.vue")['default']
export const FormsFormElementsFileinputFileInputDensity: typeof import("../components/forms/form-elements/fileinput/FileInputDensity.vue")['default']
export const FormsFormElementsFileinputFileInputMultiple: typeof import("../components/forms/form-elements/fileinput/FileInputMultiple.vue")['default']
export const FormsFormElementsFileinputFileInputPrepand: typeof import("../components/forms/form-elements/fileinput/FileInputPrepand.vue")['default']
export const FormsFormElementsFileinputFileInputSelection: typeof import("../components/forms/form-elements/fileinput/FileInputSelection.vue")['default']
export const FormsFormElementsFileinputFileInputValidation: typeof import("../components/forms/form-elements/fileinput/FileInputValidation.vue")['default']
export const FormsFormElementsRadioColor: typeof import("../components/forms/form-elements/radio/Color.vue")['default']
export const FormsFormElementsRadioDefault: typeof import("../components/forms/form-elements/radio/Default.vue")['default']
export const FormsFormElementsRadioDefaultDirection: typeof import("../components/forms/form-elements/radio/DefaultDirection.vue")['default']
export const FormsFormElementsRadioInlineDirection: typeof import("../components/forms/form-elements/radio/InlineDirection.vue")['default']
export const FormsFormElementsRadioLabel: typeof import("../components/forms/form-elements/radio/Label.vue")['default']
export const FormsFormElementsRadioLabelwithColor: typeof import("../components/forms/form-elements/radio/LabelwithColor.vue")['default']
export const FormsFormElementsSelectChip: typeof import("../components/forms/form-elements/select/SelectChip.vue")['default']
export const FormsFormElementsSelectDefault: typeof import("../components/forms/form-elements/select/SelectDefault.vue")['default']
export const FormsFormElementsSelectDensity: typeof import("../components/forms/form-elements/select/SelectDensity.vue")['default']
export const FormsFormElementsSelectMultiple: typeof import("../components/forms/form-elements/select/SelectMultiple.vue")['default']
export const FormsFormElementsSelectReadOnly: typeof import("../components/forms/form-elements/select/SelectReadOnly.vue")['default']
export const FormsFormElementsSliderCustom: typeof import("../components/forms/form-elements/slider/Custom.vue")['default']
export const FormsFormElementsSliderDefault: typeof import("../components/forms/form-elements/slider/Default.vue")['default']
export const FormsFormElementsSliderDisabled: typeof import("../components/forms/form-elements/slider/Disabled.vue")['default']
export const FormsFormElementsSliderSteps: typeof import("../components/forms/form-elements/slider/Steps.vue")['default']
export const FormsFormElementsSliderTickSize: typeof import("../components/forms/form-elements/slider/TickSize.vue")['default']
export const FormsFormElementsSliderTicks: typeof import("../components/forms/form-elements/slider/Ticks.vue")['default']
export const FormsFormElementsSliderVertical: typeof import("../components/forms/form-elements/slider/Vertical.vue")['default']
export const FormsFormElementsSliderVolume: typeof import("../components/forms/form-elements/slider/Volume.vue")['default']
export const FormsFormElementsStepperAlternatelabel: typeof import("../components/forms/form-elements/stepper/Alternatelabel.vue")['default']
export const FormsFormElementsStepperAlternativeErrors: typeof import("../components/forms/form-elements/stepper/AlternativeErrors.vue")['default']
export const FormsFormElementsStepperEditableStepper: typeof import("../components/forms/form-elements/stepper/EditableStepper.vue")['default']
export const FormsFormElementsStepperItemStepper: typeof import("../components/forms/form-elements/stepper/ItemStepper.vue")['default']
export const FormsFormElementsStepperLinearSteppers: typeof import("../components/forms/form-elements/stepper/LinearSteppers.vue")['default']
export const FormsFormElementsStepperNoEditable: typeof import("../components/forms/form-elements/stepper/NoEditable.vue")['default']
export const FormsFormElementsStepperOptionalSteps: typeof import("../components/forms/form-elements/stepper/OptionalSteps.vue")['default']
export const FormsFormElementsSwitchColors: typeof import("../components/forms/form-elements/switch/Colors.vue")['default']
export const FormsFormElementsSwitchDefault: typeof import("../components/forms/form-elements/switch/Default.vue")['default']
export const FormsFormElementsSwitchInset: typeof import("../components/forms/form-elements/switch/Inset.vue")['default']
export const FormsFormElementsSwitchInsetColors: typeof import("../components/forms/form-elements/switch/InsetColors.vue")['default']
export const FormsFormElementsSwitchLabel: typeof import("../components/forms/form-elements/switch/Label.vue")['default']
export const FormsFormElementsSwitchStates: typeof import("../components/forms/form-elements/switch/States.vue")['default']
export const FormsFormElementsTreeviewActivatable: typeof import("../components/forms/form-elements/treeview/Activatable.vue")['default']
export const FormsFormElementsTreeviewBasic: typeof import("../components/forms/form-elements/treeview/Basic.vue")['default']
export const FormsFormElementsTreeviewColors: typeof import("../components/forms/form-elements/treeview/Colors.vue")['default']
export const FormsFormElementsTreeviewDenseMode: typeof import("../components/forms/form-elements/treeview/DenseMode.vue")['default']
export const FormsFormElementsTreeviewOpenAll: typeof import("../components/forms/form-elements/treeview/OpenAll.vue")['default']
export const FormsFormHorizontalAccountDetailsTab: typeof import("../components/forms/form-horizontal/AccountDetailsTab.vue")['default']
export const FormsFormHorizontalBasicLayout: typeof import("../components/forms/form-horizontal/BasicLayout.vue")['default']
export const FormsFormHorizontalBasicWithIcons: typeof import("../components/forms/form-horizontal/BasicWithIcons.vue")['default']
export const FormsFormHorizontalCollapsible: typeof import("../components/forms/form-horizontal/Collapsible.vue")['default']
export const FormsFormHorizontalFormLabelAlign: typeof import("../components/forms/form-horizontal/FormLabelAlign.vue")['default']
export const FormsFormHorizontalFormSeprator: typeof import("../components/forms/form-horizontal/FormSeprator.vue")['default']
export const FormsFormHorizontalPersonalInfoTab: typeof import("../components/forms/form-horizontal/PersonalInfoTab.vue")['default']
export const FormsFormHorizontalSocialLinksTab: typeof import("../components/forms/form-horizontal/SocialLinksTab.vue")['default']
export const FormsFormLayoutsBasicHeaderForm: typeof import("../components/forms/form-layouts/BasicHeaderForm.vue")['default']
export const FormsFormLayoutsDefaultForm: typeof import("../components/forms/form-layouts/DefaultForm.vue")['default']
export const FormsFormLayoutsDisabledForm: typeof import("../components/forms/form-layouts/DisabledForm.vue")['default']
export const FormsFormLayoutsFormLeftIcon: typeof import("../components/forms/form-layouts/FormLeftIcon.vue")['default']
export const FormsFormLayoutsFormRightIcon: typeof import("../components/forms/form-layouts/FormRightIcon.vue")['default']
export const FormsFormLayoutsInputVarients: typeof import("../components/forms/form-layouts/InputVarients.vue")['default']
export const FormsFormLayoutsOrdinaryForm: typeof import("../components/forms/form-layouts/OrdinaryForm.vue")['default']
export const FormsFormValidationCheckBox: typeof import("../components/forms/form-validation/CheckBox.vue")['default']
export const FormsFormValidationMailValidation: typeof import("../components/forms/form-validation/MailValidation.vue")['default']
export const FormsFormValidationOnType: typeof import("../components/forms/form-validation/OnType.vue")['default']
export const FormsFormValidationRadio: typeof import("../components/forms/form-validation/Radio.vue")['default']
export const FormsFormValidationSelect: typeof import("../components/forms/form-validation/Select.vue")['default']
export const FormsFormValidationTextInput: typeof import("../components/forms/form-validation/TextInput.vue")['default']
export const FormsFormValidationVeeValidation: typeof import("../components/forms/form-validation/VeeValidation.vue")['default']
export const FormsFormVerticalAccountDetailsTab: typeof import("../components/forms/form-vertical/AccountDetailsTab.vue")['default']
export const FormsFormVerticalBasicLayout: typeof import("../components/forms/form-vertical/BasicLayout.vue")['default']
export const FormsFormVerticalBasicWithIcons: typeof import("../components/forms/form-vertical/BasicWithIcons.vue")['default']
export const FormsFormVerticalCollapsible: typeof import("../components/forms/form-vertical/Collapsible.vue")['default']
export const FormsFormVerticalFormSeprator: typeof import("../components/forms/form-vertical/FormSeprator.vue")['default']
export const FormsFormVerticalPersonalInfoTab: typeof import("../components/forms/form-vertical/PersonalInfoTab.vue")['default']
export const FormsFormVerticalSocialLinksTab: typeof import("../components/forms/form-vertical/SocialLinksTab.vue")['default']
export const FormsPluginsEditorMenu: typeof import("../components/forms/plugins/editor/EditorMenu.vue")['default']
export const FormsPluginsEditorMenubar: typeof import("../components/forms/plugins/editor/EditorMenubar.vue")['default']
export const FrontpagesAboutUsArchivement: typeof import("../components/frontpages/AboutUs/Archivement.vue")['default']
export const FrontpagesAboutUsHeroText: typeof import("../components/frontpages/AboutUs/HeroText.vue")['default']
export const FrontpagesAboutUsSetupProcess: typeof import("../components/frontpages/AboutUs/SetupProcess.vue")['default']
export const FrontpagesContactUsContactForm: typeof import("../components/frontpages/ContactUs/ContactForm.vue")['default']
export const FrontpagesContactUsContactMap: typeof import("../components/frontpages/ContactUs/ContactMap.vue")['default']
export const FrontpagesHomepageClientReviews: typeof import("../components/frontpages/Homepage/ClientReviews.vue")['default']
export const FrontpagesHomepageClientTabs: typeof import("../components/frontpages/Homepage/ClientTabs.vue")['default']
export const FrontpagesHomepageComponies: typeof import("../components/frontpages/Homepage/Componies.vue")['default']
export const FrontpagesHomepageContactBar: typeof import("../components/frontpages/Homepage/ContactBar.vue")['default']
export const FrontpagesHomepageFAQ: typeof import("../components/frontpages/Homepage/FAQ.vue")['default']
export const FrontpagesHomepageFeatureTabs: typeof import("../components/frontpages/Homepage/FeatureTabs.vue")['default']
export const FrontpagesHomepageHighlights: typeof import("../components/frontpages/Homepage/Highlights.vue")['default']
export const FrontpagesHomepageMainbanner: typeof import("../components/frontpages/Homepage/Mainbanner.vue")['default']
export const FrontpagesHomepageOurClients: typeof import("../components/frontpages/Homepage/OurClients.vue")['default']
export const FrontpagesHomepageOurTeam: typeof import("../components/frontpages/Homepage/OurTeam.vue")['default']
export const FrontpagesHomepagePackages: typeof import("../components/frontpages/Homepage/Packages.vue")['default']
export const FrontpagesHomepageProfessionalTabs: typeof import("../components/frontpages/Homepage/ProfessionalTabs.vue")['default']
export const FrontpagesHomepagePurchaseTemplate: typeof import("../components/frontpages/Homepage/PurchaseTemplate.vue")['default']
export const FrontpagesHomepageSecurePayment: typeof import("../components/frontpages/Homepage/SecurePayment.vue")['default']
export const FrontpagesSharedTextBannerCard: typeof import("../components/frontpages/Shared/TextBannerCard.vue")['default']
export const FrontpagesLayoutAnnounceBar: typeof import("../components/frontpages/layout/AnnounceBar.vue")['default']
export const FrontpagesLayoutFooter: typeof import("../components/frontpages/layout/Footer.vue")['default']
export const FrontpagesLayoutHeader: typeof import("../components/frontpages/layout/Header.vue")['default']
export const FrontpagesLayoutNavigation: typeof import("../components/frontpages/layout/Navigation.vue")['default']
export const JuridiqueCharteBonneConduite: typeof import("../components/juridique/CharteBonneConduite.vue")['default']
export const LandingpageLayoutFooter: typeof import("../components/landingpage/layout/Footer.vue")['default']
export const LandingpageLayoutHeader: typeof import("../components/landingpage/layout/Header.vue")['default']
export const LandingpageLayoutMobileSidebar: typeof import("../components/landingpage/layout/MobileSidebar.vue")['default']
export const LandingpageLayoutNavigation: typeof import("../components/landingpage/layout/Navigation.vue")['default']
export const LandingpageLayoutPageMegamenu: typeof import("../components/landingpage/layout/PageMegamenu.vue")['default']
export const LandingpageLayoutPageMenuQuicklinks: typeof import("../components/landingpage/layout/PageMenuQuicklinks.vue")['default']
export const LandingpageSectionPurchase: typeof import("../components/landingpage/section/Purchase.vue")['default']
export const LandingpageSectionRevolution: typeof import("../components/landingpage/section/Revolution.vue")['default']
export const LandingpageSectionOtherFeatures: typeof import("../components/landingpage/section/otherFeatures.vue")['default']
export const LandingpageSectionOurProducts: typeof import("../components/landingpage/section/ourProducts.vue")['default']
export const LandingpageSectionUserReview: typeof import("../components/landingpage/section/userReview.vue")['default']
export const LcFullCustomizer: typeof import("../components/lc/Full/customizer/Customizer.vue")['default']
export const LcFullHorizontalHeader: typeof import("../components/lc/Full/horizontal-header/index.vue")['default']
export const LcFullHorizontalSidebarNavCollapse: typeof import("../components/lc/Full/horizontal-sidebar/NavCollapse/Index.vue")['default']
export const LcFullHorizontalSidebarNavItem: typeof import("../components/lc/Full/horizontal-sidebar/NavItem/Index.vue")['default']
export const LcFullHorizontalSidebarHorizontalItems: typeof import("../components/lc/Full/horizontal-sidebar/horizontalItems")['default']
export const LcFullHorizontalSidebar: typeof import("../components/lc/Full/horizontal-sidebar/index.vue")['default']
export const LcFullVerticalHeaderAppsLink: typeof import("../components/lc/Full/vertical-header/AppsLink.vue")['default']
export const LcFullVerticalHeaderNavigations: typeof import("../components/lc/Full/vertical-header/Navigations.vue")['default']
export const LcFullVerticalHeaderNotificationDD: typeof import("../components/lc/Full/vertical-header/NotificationDD.vue")['default']
export const LcFullVerticalHeaderProfileDD: typeof import("../components/lc/Full/vertical-header/ProfileDD.vue")['default']
export const LcFullVerticalHeaderQuickLinks: typeof import("../components/lc/Full/vertical-header/QuickLinks.vue")['default']
export const LcFullVerticalHeaderRightMobileSidebar: typeof import("../components/lc/Full/vertical-header/RightMobileSidebar.vue")['default']
export const LcFullVerticalHeaderSearchbar: typeof import("../components/lc/Full/vertical-header/Searchbar.vue")['default']
export const LcFullVerticalHeaderThemeToggler: typeof import("../components/lc/Full/vertical-header/ThemeToggler.vue")['default']
export const LcFullVerticalHeader: typeof import("../components/lc/Full/vertical-header/index.vue")['default']
export const LcFullVerticalSidebarDropDown: typeof import("../components/lc/Full/vertical-sidebar/DropDown/index.vue")['default']
export const LcFullVerticalSidebarIcon: typeof import("../components/lc/Full/vertical-sidebar/Icon.vue")['default']
export const LcFullVerticalSidebarMoreOption: typeof import("../components/lc/Full/vertical-sidebar/MoreOption/index.vue")['default']
export const LcFullVerticalSidebarNavCollapse: typeof import("../components/lc/Full/vertical-sidebar/NavCollapse/index.vue")['default']
export const LcFullVerticalSidebarNavGroup: typeof import("../components/lc/Full/vertical-sidebar/NavGroup/index.vue")['default']
export const LcFullVerticalSidebarNavItem: typeof import("../components/lc/Full/vertical-sidebar/NavItem/index.vue")['default']
export const LcFullVerticalSidebarExtrabox: typeof import("../components/lc/Full/vertical-sidebar/extrabox/index.vue")['default']
export const LcFullVerticalSidebar: typeof import("../components/lc/Full/vertical-sidebar/index.vue")['default']
export const LcFullVerticalSidebarItem: typeof import("../components/lc/Full/vertical-sidebar/sidebarItem")['default']
export const PagesAccountSettingsAccountTab: typeof import("../components/pages/account-settings/AccountTab.vue")['default']
export const PagesAccountSettingsBillsTab: typeof import("../components/pages/account-settings/BillsTab.vue")['default']
export const PagesAccountSettingsNotificationTab: typeof import("../components/pages/account-settings/NotificationTab.vue")['default']
export const PagesAccountSettingsSecurityTab: typeof import("../components/pages/account-settings/SecurityTab.vue")['default']
export const PagesFaqQuestion: typeof import("../components/pages/faq/FaqQuestion.vue")['default']
export const PagesFaqStillHaveQuestions: typeof import("../components/pages/faq/StillHaveQuestions.vue")['default']
export const PagesSearchResultsSearchLinks: typeof import("../components/pages/search-results/SearchLinks.vue")['default']
export const QuestionnairesCustomerForm: typeof import("../components/questionnaires/CustomerForm.vue")['default']
export const QuestionnairesDynamicFormDialog: typeof import("../components/questionnaires/DynamicFormDialog.vue")['default']
export const QuestionnairesFormField: typeof import("../components/questionnaires/FormField.vue")['default']
export const QuestionnairesSectionController: typeof import("../components/questionnaires/SectionController.vue")['default']
export const QuestionnairesServicesPrestataire: typeof import("../components/questionnaires/ServicesPrestataire.vue")['default']
export const QuestionnairesValidationError: typeof import("../components/questionnaires/ValidationError.vue")['default']
export const SharedAppBaseCard: typeof import("../components/shared/AppBaseCard.vue")['default']
export const SharedAppEmailCard: typeof import("../components/shared/AppEmailCard.vue")['default']
export const SharedBaseBreadcrumb: typeof import("../components/shared/BaseBreadcrumb.vue")['default']
export const SharedBaseCard: typeof import("../components/shared/BaseCard.vue")['default']
export const SharedCardHeaderFooter: typeof import("../components/shared/CardHeaderFooter.vue")['default']
export const SharedProductBaseCard: typeof import("../components/shared/ProductBaseCard.vue")['default']
export const SharedUiChildCard: typeof import("../components/shared/UiChildCard.vue")['default']
export const SharedUiParentCard: typeof import("../components/shared/UiParentCard.vue")['default']
export const SharedUiParentCardLogo: typeof import("../components/shared/UiParentCardLogo.vue")['default']
export const SharedUiTableCard: typeof import("../components/shared/UiTableCard.vue")['default']
export const SharedUiTextfieldPrimary: typeof import("../components/shared/UiTextfieldPrimary.vue")['default']
export const SharedUiTittleSubtitleCard: typeof import("../components/shared/UiTittleSubtitleCard.vue")['default']
export const SharedWidgetCard: typeof import("../components/shared/WidgetCard.vue")['default']
export const SharedWidgetCardv2: typeof import("../components/shared/WidgetCardv2.vue")['default']
export const SharedECommerceCard: typeof import("../components/shared/eCommerceCard.vue")['default']
export const StyleComponentsTypographyDefaultText: typeof import("../components/style-components/typography/DefaultText.vue")['default']
export const StyleComponentsTypographyHeading: typeof import("../components/style-components/typography/Heading.vue")['default']
export const StyleComponentsTypographyOpacity: typeof import("../components/style-components/typography/Opacity.vue")['default']
export const StyleComponentsTypographyTextAlignment: typeof import("../components/style-components/typography/TextAlignment.vue")['default']
export const StyleComponentsTypographyTextDecoration: typeof import("../components/style-components/typography/TextDecoration.vue")['default']
export const TableTable1: typeof import("../components/table/Table1.vue")['default']
export const TableTable2: typeof import("../components/table/Table2.vue")['default']
export const TableTable3: typeof import("../components/table/Table3.vue")['default']
export const TableTable4: typeof import("../components/table/Table4.vue")['default']
export const TableTable5: typeof import("../components/table/Table5.vue")['default']
export const UiComponentsAlertAction: typeof import("../components/ui-components/alert/Action.vue")['default']
export const UiComponentsAlertBasic: typeof import("../components/ui-components/alert/Basic.vue")['default']
export const UiComponentsAlertClosable: typeof import("../components/ui-components/alert/Closable.vue")['default']
export const UiComponentsAlertDescription: typeof import("../components/ui-components/alert/Description.vue")['default']
export const UiComponentsAlertFilled: typeof import("../components/ui-components/alert/Filled.vue")['default']
export const UiComponentsAlertIcons: typeof import("../components/ui-components/alert/Icons.vue")['default']
export const UiComponentsAlertOutlined: typeof import("../components/ui-components/alert/Outlined.vue")['default']
export const UiComponentsAvatarBasicAvatar: typeof import("../components/ui-components/avatar/BasicAvatar.vue")['default']
export const UiComponentsAvatarIconAvatar: typeof import("../components/ui-components/avatar/IconAvatar.vue")['default']
export const UiComponentsAvatarImageAvatar: typeof import("../components/ui-components/avatar/ImageAvatar.vue")['default']
export const UiComponentsAvatarLetterAvatar: typeof import("../components/ui-components/avatar/LetterAvatar.vue")['default']
export const UiComponentsAvatarSizeAvatar: typeof import("../components/ui-components/avatar/SizeAvatar.vue")['default']
export const UiComponentsAvatarVariantAvatar: typeof import("../components/ui-components/avatar/VariantAvatar.vue")['default']
export const UiComponentsChipClosable: typeof import("../components/ui-components/chip/Closable.vue")['default']
export const UiComponentsChipCustomIcon: typeof import("../components/ui-components/chip/CustomIcon.vue")['default']
export const UiComponentsChipCustomIconOutlined: typeof import("../components/ui-components/chip/CustomIconOutlined.vue")['default']
export const UiComponentsChipDisabled: typeof import("../components/ui-components/chip/Disabled.vue")['default']
export const UiComponentsChipFilledColor: typeof import("../components/ui-components/chip/FilledColor.vue")['default']
export const UiComponentsChipLabelChip: typeof import("../components/ui-components/chip/LabelChip.vue")['default']
export const UiComponentsChipOutlined: typeof import("../components/ui-components/chip/Outlined.vue")['default']
export const UiComponentsChipSizes: typeof import("../components/ui-components/chip/Sizes.vue")['default']
export const UiComponentsDialogsActivator: typeof import("../components/ui-components/dialogs/DialogsActivator.vue")['default']
export const UiComponentsDialogsForm: typeof import("../components/ui-components/dialogs/DialogsForm.vue")['default']
export const UiComponentsDialogsFullscreen: typeof import("../components/ui-components/dialogs/DialogsFullscreen.vue")['default']
export const UiComponentsDialogsModel: typeof import("../components/ui-components/dialogs/DialogsModel.vue")['default']
export const UiComponentsDialogsNested: typeof import("../components/ui-components/dialogs/DialogsNested.vue")['default']
export const UiComponentsDialogsPersistent: typeof import("../components/ui-components/dialogs/DialogsPersistent.vue")['default']
export const UiComponentsDialogsScrollable: typeof import("../components/ui-components/dialogs/DialogsScrollable.vue")['default']
export const UiComponentsDialogsTransitions: typeof import("../components/ui-components/dialogs/DialogsTransitions.vue")['default']
export const UiComponentsExpansionpanelAdvance: typeof import("../components/ui-components/expansionpanel/Advance.vue")['default']
export const UiComponentsExpansionpanelBasic: typeof import("../components/ui-components/expansionpanel/Basic.vue")['default']
export const UiComponentsExpansionpanelCustomizedIcon: typeof import("../components/ui-components/expansionpanel/CustomizedIcon.vue")['default']
export const UiComponentsExpansionpanelDefaultExpand: typeof import("../components/ui-components/expansionpanel/DefaultExpand.vue")['default']
export const UiComponentsExpansionpanelInset: typeof import("../components/ui-components/expansionpanel/Inset.vue")['default']
export const UiComponentsExpansionpanelPopout: typeof import("../components/ui-components/expansionpanel/Popout.vue")['default']
export const UiComponentsListCustomAlignList: typeof import("../components/ui-components/list/CustomAlignList.vue")['default']
export const UiComponentsListDisabledList: typeof import("../components/ui-components/list/DisabledList.vue")['default']
export const UiComponentsListFolderList: typeof import("../components/ui-components/list/FolderList.vue")['default']
export const UiComponentsListNestedList: typeof import("../components/ui-components/list/NestedList.vue")['default']
export const UiComponentsListRoundedList: typeof import("../components/ui-components/list/RoundedList.vue")['default']
export const UiComponentsListScrollableList: typeof import("../components/ui-components/list/ScrollableList.vue")['default']
export const UiComponentsListSimpleList: typeof import("../components/ui-components/list/SimpleList.vue")['default']
export const UiComponentsListSwitchList: typeof import("../components/ui-components/list/SwitchList.vue")['default']
export const UiComponentsMenusActivatorTooltip: typeof import("../components/ui-components/menus/MenusActivatorTooltip.vue")['default']
export const UiComponentsMenusAnchor: typeof import("../components/ui-components/menus/MenusAnchor.vue")['default']
export const UiComponentsMenusHover: typeof import("../components/ui-components/menus/MenusHover.vue")['default']
export const UiComponentsMenusPopover: typeof import("../components/ui-components/menus/MenusPopover.vue")['default']
export const UiComponentsRattingBasicRatting: typeof import("../components/ui-components/ratting/BasicRatting.vue")['default']
export const UiComponentsRattingClearableRatting: typeof import("../components/ui-components/ratting/ClearableRatting.vue")['default']
export const UiComponentsRattingHalfRatting: typeof import("../components/ui-components/ratting/HalfRatting.vue")['default']
export const UiComponentsRattingHoverRatting: typeof import("../components/ui-components/ratting/HoverRatting.vue")['default']
export const UiComponentsRattingIconsRatting: typeof import("../components/ui-components/ratting/IconsRatting.vue")['default']
export const UiComponentsRattingLabelRatting: typeof import("../components/ui-components/ratting/LabelRatting.vue")['default']
export const UiComponentsRattingLengthRatting: typeof import("../components/ui-components/ratting/LengthRatting.vue")['default']
export const UiComponentsRattingReadOnlyRatting: typeof import("../components/ui-components/ratting/ReadOnlyRatting.vue")['default']
export const UiComponentsRattingSizeRatting: typeof import("../components/ui-components/ratting/SizeRatting.vue")['default']
export const UiComponentsTabsAlignCenterTabs: typeof import("../components/ui-components/tabs/AlignCenterTabs.vue")['default']
export const UiComponentsTabsAlignEndTabs: typeof import("../components/ui-components/tabs/AlignEndTabs.vue")['default']
export const UiComponentsTabsBasicTabs: typeof import("../components/ui-components/tabs/BasicTabs.vue")['default']
export const UiComponentsTabsCenterTabs: typeof import("../components/ui-components/tabs/CenterTabs.vue")['default']
export const UiComponentsTabsColorTabs: typeof import("../components/ui-components/tabs/ColorTabs.vue")['default']
export const UiComponentsTabsCustomIcons: typeof import("../components/ui-components/tabs/CustomIcons.vue")['default']
export const UiComponentsTabsDisableTabs: typeof import("../components/ui-components/tabs/DisableTabs.vue")['default']
export const UiComponentsTabsIconTabs: typeof import("../components/ui-components/tabs/IconTabs.vue")['default']
export const UiComponentsTabsIconsWithLabelTabs: typeof import("../components/ui-components/tabs/IconsWithLabelTabs.vue")['default']
export const UiComponentsTooltipIconTooltip: typeof import("../components/ui-components/tooltip/IconTooltip.vue")['default']
export const UiComponentsTooltipSimpleTooltip: typeof import("../components/ui-components/tooltip/SimpleTooltip.vue")['default']
export const UiComponentsTooltipToggleTolltip: typeof import("../components/ui-components/tooltip/ToggleTolltip.vue")['default']
export const WidgetsBannersBanner1: typeof import("../components/widgets/banners/Banner1.vue")['default']
export const WidgetsBannersBanner2: typeof import("../components/widgets/banners/Banner2.vue")['default']
export const WidgetsBannersBanner3: typeof import("../components/widgets/banners/Banner3.vue")['default']
export const WidgetsBannersBanner4: typeof import("../components/widgets/banners/Banner4.vue")['default']
export const WidgetsBannersBanner5: typeof import("../components/widgets/banners/Banner5.vue")['default']
export const WidgetsBannersBanner6: typeof import("../components/widgets/banners/Banner6.vue")['default']
export const WidgetsCardsCongtsCard: typeof import("../components/widgets/cards/CongtsCard.vue")['default']
export const WidgetsCardsPaymentGateway: typeof import("../components/widgets/cards/PaymentGateway.vue")['default']
export const WidgetsCardsProfileBoxCards: typeof import("../components/widgets/cards/ProfileBoxCards.vue")['default']
export const WidgetsCardsRecentTransactions: typeof import("../components/widgets/cards/RecentTransactions.vue")['default']
export const WidgetsCardsTopCards: typeof import("../components/widgets/cards/TopCards.vue")['default']
export const WidgetsChartsNetSells: typeof import("../components/widgets/charts/NetSells.vue")['default']
export const WidgetsChartsPayingChart: typeof import("../components/widgets/charts/PayingChart.vue")['default']
export const WidgetsChartsTraficDistributionChart: typeof import("../components/widgets/charts/TraficDistributionChart.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyAppsEcommerceCartCheckout: LazyComponent<typeof import("../components/apps/ecommerce/cart/CartCheckout.vue")['default']>
export const LazyAppsEcommerceCartEmpty: LazyComponent<typeof import("../components/apps/ecommerce/cart/CartEmpty.vue")['default']>
export const LazyAppsEcommerceCartStepsAddAddress: LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/AddAddress.vue")['default']>
export const LazyAppsEcommerceCartStepsAddCard: LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/AddCard.vue")['default']>
export const LazyAppsEcommerceCartStepsAddressCard: LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/AddressCard.vue")['default']>
export const LazyAppsEcommerceCartStepsOrderSummary: LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/OrderSummary.vue")['default']>
export const LazyAppsEcommerceCartStepsPayment: LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/Payment.vue")['default']>
export const LazyAppsEcommerceCartStepsStepFirst: LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/StepFirst.vue")['default']>
export const LazyAppsEcommerceCartStepsStepSecond: LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/StepSecond.vue")['default']>
export const LazyAppsEcommerceCartStepsTestStripe: LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/TestStripe.vue")['default']>
export const LazyAppsEcommerceCartStepsThankyou: LazyComponent<typeof import("../components/apps/ecommerce/cart/steps/Thankyou.vue")['default']>
export const LazyAppsNotesAddNote: LazyComponent<typeof import("../components/apps/notes/AddNote.vue")['default']>
export const LazyAppsNotesContent: LazyComponent<typeof import("../components/apps/notes/NotesContent.vue")['default']>
export const LazyAppsNotesListing: LazyComponent<typeof import("../components/apps/notes/NotesListing.vue")['default']>
export const LazyAppsUserProfileEditClientProfil: LazyComponent<typeof import("../components/apps/user-profile/EditClientProfil.vue")['default']>
export const LazyAppsUserProfileEditProfessionalProfil: LazyComponent<typeof import("../components/apps/user-profile/EditProfessionalProfil.vue")['default']>
export const LazyAppsUserProfileIntroCard: LazyComponent<typeof import("../components/apps/user-profile/IntroCard.vue")['default']>
export const LazyAppsUserProfileModalRedirection: LazyComponent<typeof import("../components/apps/user-profile/ModalRedirection.vue")['default']>
export const LazyAppsUserProfileBanner: LazyComponent<typeof import("../components/apps/user-profile/ProfileBanner.vue")['default']>
export const LazyAppsUserProfileBannerOne: LazyComponent<typeof import("../components/apps/user-profile/ProfileBannerOne.vue")['default']>
export const LazyAppsUserProfileProfileOneIntroCard: LazyComponent<typeof import("../components/apps/user-profile/profile-one/IntroCard.vue")['default']>
export const LazyAppsUserProfileProfileOneNumberCards: LazyComponent<typeof import("../components/apps/user-profile/profile-one/NumberCards.vue")['default']>
export const LazyAppsUserProfileProfileOneTeamsCard: LazyComponent<typeof import("../components/apps/user-profile/profile-one/TeamsCard.vue")['default']>
export const LazyAuthLoginForm: LazyComponent<typeof import("../components/auth/LoginForm.vue")['default']>
export const LazyAuthRegisterForm: LazyComponent<typeof import("../components/auth/RegisterForm.vue")['default']>
export const LazyAuthResetForm: LazyComponent<typeof import("../components/auth/ResetForm.vue")['default']>
export const LazyAuthTwoStepForm: LazyComponent<typeof import("../components/auth/TwoStepForm.vue")['default']>
export const LazyCommonBaseEmptyState: LazyComponent<typeof import("../components/common/BaseEmptyState.vue")['default']>
export const LazyCommonBaseModal: LazyComponent<typeof import("../components/common/BaseModal.vue")['default']>
export const LazyCommonBaseSidePicture: LazyComponent<typeof import("../components/common/BaseSidePicture.vue")['default']>
export const LazyCommonLoader: LazyComponent<typeof import("../components/common/Loader.vue")['default']>
export const LazyCommonErrorToaster: LazyComponent<typeof import("../components/common/errorToaster.vue")['default']>
export const LazyCommonSuccessToaster: LazyComponent<typeof import("../components/common/successToaster.vue")['default']>
export const LazyDashboardsDashboardClientAddEventService: LazyComponent<typeof import("../components/dashboards/dashboard-client/AddEventService.vue")['default']>
export const LazyDashboardsDashboardClientCheckList: LazyComponent<typeof import("../components/dashboards/dashboard-client/CheckList.vue")['default']>
export const LazyDashboardsDashboardClientCongratulationsCard: LazyComponent<typeof import("../components/dashboards/dashboard-client/CongratulationsCard.vue")['default']>
export const LazyDashboardsDashboardClientCurrentEvents: LazyComponent<typeof import("../components/dashboards/dashboard-client/CurrentEvents.vue")['default']>
export const LazyDashboardsDashboardClientCustomers: LazyComponent<typeof import("../components/dashboards/dashboard-client/Customers.vue")['default']>
export const LazyDashboardsDashboardClientDateCounter: LazyComponent<typeof import("../components/dashboards/dashboard-client/DateCounter.vue")['default']>
export const LazyDashboardsDashboardClientEventDetails: LazyComponent<typeof import("../components/dashboards/dashboard-client/EventDetails.vue")['default']>
export const LazyDashboardsDashboardClientEvents: LazyComponent<typeof import("../components/dashboards/dashboard-client/Events.vue")['default']>
export const LazyDashboardsDashboardClientLatestDeals: LazyComponent<typeof import("../components/dashboards/dashboard-client/LatestDeals.vue")['default']>
export const LazyDashboardsDashboardClientLatestReviews: LazyComponent<typeof import("../components/dashboards/dashboard-client/LatestReviews.vue")['default']>
export const LazyDashboardsDashboardClientPayments: LazyComponent<typeof import("../components/dashboards/dashboard-client/Payments.vue")['default']>
export const LazyDashboardsDashboardClientPricingChoice: LazyComponent<typeof import("../components/dashboards/dashboard-client/PricingChoice.vue")['default']>
export const LazyDashboardsDashboardClientProductsChart: LazyComponent<typeof import("../components/dashboards/dashboard-client/ProductsChart.vue")['default']>
export const LazyDashboardsDashboardClientProductsTable: LazyComponent<typeof import("../components/dashboards/dashboard-client/ProductsTable.vue")['default']>
export const LazyDashboardsDashboardClientProfessionalProfil: LazyComponent<typeof import("../components/dashboards/dashboard-client/ProfessionalProfil.vue")['default']>
export const LazyDashboardsDashboardClientProjectLeap: LazyComponent<typeof import("../components/dashboards/dashboard-client/ProjectLeap.vue")['default']>
export const LazyDashboardsDashboardClientPropositionsPresta: LazyComponent<typeof import("../components/dashboards/dashboard-client/PropositionsPresta.vue")['default']>
export const LazyDashboardsDashboard2FigmaCard: LazyComponent<typeof import("../components/dashboards/dashboard2/FigmaCard.vue")['default']>
export const LazyDashboardsDashboard2PayingTable: LazyComponent<typeof import("../components/dashboards/dashboard2/PayingTable.vue")['default']>
export const LazyDashboardsDashboard2ProductSales: LazyComponent<typeof import("../components/dashboards/dashboard2/ProductSales.vue")['default']>
export const LazyDashboardsDashboard2ProfessionalMarketPlace: LazyComponent<typeof import("../components/dashboards/dashboard2/ProfessionalMarketPlace.vue")['default']>
export const LazyDashboardsDashboard2ProfileCards: LazyComponent<typeof import("../components/dashboards/dashboard2/ProfileCards.vue")['default']>
export const LazyDashboardsDashboard2ProfitExpanse: LazyComponent<typeof import("../components/dashboards/dashboard2/ProfitExpanse.vue")['default']>
export const LazyDashboardsDashboard2PropositionAccepted: LazyComponent<typeof import("../components/dashboards/dashboard2/PropositionAccepted.vue")['default']>
export const LazyDashboardsDashboard2PropositionDetails: LazyComponent<typeof import("../components/dashboards/dashboard2/PropositionDetails.vue")['default']>
export const LazyDashboardsDashboard2TextCards: LazyComponent<typeof import("../components/dashboards/dashboard2/TextCards.vue")['default']>
export const LazyDashboardsDashboard2TrafficDistribution: LazyComponent<typeof import("../components/dashboards/dashboard2/TrafficDistribution.vue")['default']>
export const LazyDashboardsDashboard2UpcommingSchedule: LazyComponent<typeof import("../components/dashboards/dashboard2/UpcommingSchedule.vue")['default']>
export const LazyDashboardsDashboard2WelcomeCard: LazyComponent<typeof import("../components/dashboards/dashboard2/WelcomeCard.vue")['default']>
export const LazyFormsFormCustomFrom: LazyComponent<typeof import("../components/forms/form-custom/CustomFrom.vue")['default']>
export const LazyFormsFormElementsAutocompleteComboBox: LazyComponent<typeof import("../components/forms/form-elements/autocomplete/ComboBox.vue")['default']>
export const LazyFormsFormElementsAutocompleteMultipleOptions: LazyComponent<typeof import("../components/forms/form-elements/autocomplete/MultipleOptions.vue")['default']>
export const LazyFormsFormElementsAutocompleteWithCaption: LazyComponent<typeof import("../components/forms/form-elements/autocomplete/WithCaption.vue")['default']>
export const LazyFormsFormElementsButtonBaseButtons: LazyComponent<typeof import("../components/forms/form-elements/button/BaseButtons.vue")['default']>
export const LazyFormsFormElementsButtonColorsButtons: LazyComponent<typeof import("../components/forms/form-elements/button/ColorsButtons.vue")['default']>
export const LazyFormsFormElementsButtonIconColor: LazyComponent<typeof import("../components/forms/form-elements/button/IconColor.vue")['default']>
export const LazyFormsFormElementsButtonIconColorSizes: LazyComponent<typeof import("../components/forms/form-elements/button/IconColorSizes.vue")['default']>
export const LazyFormsFormElementsButtonIconsButtons: LazyComponent<typeof import("../components/forms/form-elements/button/IconsButtons.vue")['default']>
export const LazyFormsFormElementsButtonOutlineIconColor: LazyComponent<typeof import("../components/forms/form-elements/button/OutlineIconColor.vue")['default']>
export const LazyFormsFormElementsButtonOutlineSizes: LazyComponent<typeof import("../components/forms/form-elements/button/OutlineSizes.vue")['default']>
export const LazyFormsFormElementsButtonOutlinedButtons: LazyComponent<typeof import("../components/forms/form-elements/button/OutlinedButtons.vue")['default']>
export const LazyFormsFormElementsButtonOutlinedIconSize: LazyComponent<typeof import("../components/forms/form-elements/button/OutlinedIconSize.vue")['default']>
export const LazyFormsFormElementsButtonSizeButtons: LazyComponent<typeof import("../components/forms/form-elements/button/SizeButtons.vue")['default']>
export const LazyFormsFormElementsButtonTextButtons: LazyComponent<typeof import("../components/forms/form-elements/button/TextButtons.vue")['default']>
export const LazyFormsFormElementsButtonButtonGroupDefault: LazyComponent<typeof import("../components/forms/form-elements/button/buttonGroup/Default.vue")['default']>
export const LazyFormsFormElementsButtonButtonGroupOutlined: LazyComponent<typeof import("../components/forms/form-elements/button/buttonGroup/Outlined.vue")['default']>
export const LazyFormsFormElementsButtonButtonGroupPlain: LazyComponent<typeof import("../components/forms/form-elements/button/buttonGroup/Plain.vue")['default']>
export const LazyFormsFormElementsButtonButtonGroupText: LazyComponent<typeof import("../components/forms/form-elements/button/buttonGroup/Text.vue")['default']>
export const LazyFormsFormElementsCheckboxBasicCheckboxes: LazyComponent<typeof import("../components/forms/form-elements/checkbox/BasicCheckboxes.vue")['default']>
export const LazyFormsFormElementsCheckboxColorCheckboxes: LazyComponent<typeof import("../components/forms/form-elements/checkbox/ColorCheckboxes.vue")['default']>
export const LazyFormsFormElementsCheckboxCustomCheckbox: LazyComponent<typeof import("../components/forms/form-elements/checkbox/CustomCheckbox.vue")['default']>
export const LazyFormsFormElementsCheckboxLabelCheckboxes: LazyComponent<typeof import("../components/forms/form-elements/checkbox/LabelCheckboxes.vue")['default']>
export const LazyFormsFormElementsComboboxDense: LazyComponent<typeof import("../components/forms/form-elements/combobox/ComboboxDense.vue")['default']>
export const LazyFormsFormElementsComboboxMultiple: LazyComponent<typeof import("../components/forms/form-elements/combobox/ComboboxMultiple.vue")['default']>
export const LazyFormsFormElementsCustominputInputAppendPrepend: LazyComponent<typeof import("../components/forms/form-elements/custominput/InputAppendPrepend.vue")['default']>
export const LazyFormsFormElementsCustominputInputError: LazyComponent<typeof import("../components/forms/form-elements/custominput/InputError.vue")['default']>
export const LazyFormsFormElementsCustominputInputHideDetails: LazyComponent<typeof import("../components/forms/form-elements/custominput/InputHideDetails.vue")['default']>
export const LazyFormsFormElementsCustominputInputLoading: LazyComponent<typeof import("../components/forms/form-elements/custominput/InputLoading.vue")['default']>
export const LazyFormsFormElementsCustominputInputMultipleError: LazyComponent<typeof import("../components/forms/form-elements/custominput/InputMultipleError.vue")['default']>
export const LazyFormsFormElementsCustominputInputRules: LazyComponent<typeof import("../components/forms/form-elements/custominput/InputRules.vue")['default']>
export const LazyFormsFormElementsDatetimeDatePicker: LazyComponent<typeof import("../components/forms/form-elements/datetime/DatePicker.vue")['default']>
export const LazyFormsFormElementsDatetimeTimePicker: LazyComponent<typeof import("../components/forms/form-elements/datetime/TimePicker.vue")['default']>
export const LazyFormsFormElementsFileinputFileInputAccept: LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputAccept.vue")['default']>
export const LazyFormsFormElementsFileinputFileInputChips: LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputChips.vue")['default']>
export const LazyFormsFormElementsFileinputFileInputCounter: LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputCounter.vue")['default']>
export const LazyFormsFormElementsFileinputFileInputDensity: LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputDensity.vue")['default']>
export const LazyFormsFormElementsFileinputFileInputMultiple: LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputMultiple.vue")['default']>
export const LazyFormsFormElementsFileinputFileInputPrepand: LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputPrepand.vue")['default']>
export const LazyFormsFormElementsFileinputFileInputSelection: LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputSelection.vue")['default']>
export const LazyFormsFormElementsFileinputFileInputValidation: LazyComponent<typeof import("../components/forms/form-elements/fileinput/FileInputValidation.vue")['default']>
export const LazyFormsFormElementsRadioColor: LazyComponent<typeof import("../components/forms/form-elements/radio/Color.vue")['default']>
export const LazyFormsFormElementsRadioDefault: LazyComponent<typeof import("../components/forms/form-elements/radio/Default.vue")['default']>
export const LazyFormsFormElementsRadioDefaultDirection: LazyComponent<typeof import("../components/forms/form-elements/radio/DefaultDirection.vue")['default']>
export const LazyFormsFormElementsRadioInlineDirection: LazyComponent<typeof import("../components/forms/form-elements/radio/InlineDirection.vue")['default']>
export const LazyFormsFormElementsRadioLabel: LazyComponent<typeof import("../components/forms/form-elements/radio/Label.vue")['default']>
export const LazyFormsFormElementsRadioLabelwithColor: LazyComponent<typeof import("../components/forms/form-elements/radio/LabelwithColor.vue")['default']>
export const LazyFormsFormElementsSelectChip: LazyComponent<typeof import("../components/forms/form-elements/select/SelectChip.vue")['default']>
export const LazyFormsFormElementsSelectDefault: LazyComponent<typeof import("../components/forms/form-elements/select/SelectDefault.vue")['default']>
export const LazyFormsFormElementsSelectDensity: LazyComponent<typeof import("../components/forms/form-elements/select/SelectDensity.vue")['default']>
export const LazyFormsFormElementsSelectMultiple: LazyComponent<typeof import("../components/forms/form-elements/select/SelectMultiple.vue")['default']>
export const LazyFormsFormElementsSelectReadOnly: LazyComponent<typeof import("../components/forms/form-elements/select/SelectReadOnly.vue")['default']>
export const LazyFormsFormElementsSliderCustom: LazyComponent<typeof import("../components/forms/form-elements/slider/Custom.vue")['default']>
export const LazyFormsFormElementsSliderDefault: LazyComponent<typeof import("../components/forms/form-elements/slider/Default.vue")['default']>
export const LazyFormsFormElementsSliderDisabled: LazyComponent<typeof import("../components/forms/form-elements/slider/Disabled.vue")['default']>
export const LazyFormsFormElementsSliderSteps: LazyComponent<typeof import("../components/forms/form-elements/slider/Steps.vue")['default']>
export const LazyFormsFormElementsSliderTickSize: LazyComponent<typeof import("../components/forms/form-elements/slider/TickSize.vue")['default']>
export const LazyFormsFormElementsSliderTicks: LazyComponent<typeof import("../components/forms/form-elements/slider/Ticks.vue")['default']>
export const LazyFormsFormElementsSliderVertical: LazyComponent<typeof import("../components/forms/form-elements/slider/Vertical.vue")['default']>
export const LazyFormsFormElementsSliderVolume: LazyComponent<typeof import("../components/forms/form-elements/slider/Volume.vue")['default']>
export const LazyFormsFormElementsStepperAlternatelabel: LazyComponent<typeof import("../components/forms/form-elements/stepper/Alternatelabel.vue")['default']>
export const LazyFormsFormElementsStepperAlternativeErrors: LazyComponent<typeof import("../components/forms/form-elements/stepper/AlternativeErrors.vue")['default']>
export const LazyFormsFormElementsStepperEditableStepper: LazyComponent<typeof import("../components/forms/form-elements/stepper/EditableStepper.vue")['default']>
export const LazyFormsFormElementsStepperItemStepper: LazyComponent<typeof import("../components/forms/form-elements/stepper/ItemStepper.vue")['default']>
export const LazyFormsFormElementsStepperLinearSteppers: LazyComponent<typeof import("../components/forms/form-elements/stepper/LinearSteppers.vue")['default']>
export const LazyFormsFormElementsStepperNoEditable: LazyComponent<typeof import("../components/forms/form-elements/stepper/NoEditable.vue")['default']>
export const LazyFormsFormElementsStepperOptionalSteps: LazyComponent<typeof import("../components/forms/form-elements/stepper/OptionalSteps.vue")['default']>
export const LazyFormsFormElementsSwitchColors: LazyComponent<typeof import("../components/forms/form-elements/switch/Colors.vue")['default']>
export const LazyFormsFormElementsSwitchDefault: LazyComponent<typeof import("../components/forms/form-elements/switch/Default.vue")['default']>
export const LazyFormsFormElementsSwitchInset: LazyComponent<typeof import("../components/forms/form-elements/switch/Inset.vue")['default']>
export const LazyFormsFormElementsSwitchInsetColors: LazyComponent<typeof import("../components/forms/form-elements/switch/InsetColors.vue")['default']>
export const LazyFormsFormElementsSwitchLabel: LazyComponent<typeof import("../components/forms/form-elements/switch/Label.vue")['default']>
export const LazyFormsFormElementsSwitchStates: LazyComponent<typeof import("../components/forms/form-elements/switch/States.vue")['default']>
export const LazyFormsFormElementsTreeviewActivatable: LazyComponent<typeof import("../components/forms/form-elements/treeview/Activatable.vue")['default']>
export const LazyFormsFormElementsTreeviewBasic: LazyComponent<typeof import("../components/forms/form-elements/treeview/Basic.vue")['default']>
export const LazyFormsFormElementsTreeviewColors: LazyComponent<typeof import("../components/forms/form-elements/treeview/Colors.vue")['default']>
export const LazyFormsFormElementsTreeviewDenseMode: LazyComponent<typeof import("../components/forms/form-elements/treeview/DenseMode.vue")['default']>
export const LazyFormsFormElementsTreeviewOpenAll: LazyComponent<typeof import("../components/forms/form-elements/treeview/OpenAll.vue")['default']>
export const LazyFormsFormHorizontalAccountDetailsTab: LazyComponent<typeof import("../components/forms/form-horizontal/AccountDetailsTab.vue")['default']>
export const LazyFormsFormHorizontalBasicLayout: LazyComponent<typeof import("../components/forms/form-horizontal/BasicLayout.vue")['default']>
export const LazyFormsFormHorizontalBasicWithIcons: LazyComponent<typeof import("../components/forms/form-horizontal/BasicWithIcons.vue")['default']>
export const LazyFormsFormHorizontalCollapsible: LazyComponent<typeof import("../components/forms/form-horizontal/Collapsible.vue")['default']>
export const LazyFormsFormHorizontalFormLabelAlign: LazyComponent<typeof import("../components/forms/form-horizontal/FormLabelAlign.vue")['default']>
export const LazyFormsFormHorizontalFormSeprator: LazyComponent<typeof import("../components/forms/form-horizontal/FormSeprator.vue")['default']>
export const LazyFormsFormHorizontalPersonalInfoTab: LazyComponent<typeof import("../components/forms/form-horizontal/PersonalInfoTab.vue")['default']>
export const LazyFormsFormHorizontalSocialLinksTab: LazyComponent<typeof import("../components/forms/form-horizontal/SocialLinksTab.vue")['default']>
export const LazyFormsFormLayoutsBasicHeaderForm: LazyComponent<typeof import("../components/forms/form-layouts/BasicHeaderForm.vue")['default']>
export const LazyFormsFormLayoutsDefaultForm: LazyComponent<typeof import("../components/forms/form-layouts/DefaultForm.vue")['default']>
export const LazyFormsFormLayoutsDisabledForm: LazyComponent<typeof import("../components/forms/form-layouts/DisabledForm.vue")['default']>
export const LazyFormsFormLayoutsFormLeftIcon: LazyComponent<typeof import("../components/forms/form-layouts/FormLeftIcon.vue")['default']>
export const LazyFormsFormLayoutsFormRightIcon: LazyComponent<typeof import("../components/forms/form-layouts/FormRightIcon.vue")['default']>
export const LazyFormsFormLayoutsInputVarients: LazyComponent<typeof import("../components/forms/form-layouts/InputVarients.vue")['default']>
export const LazyFormsFormLayoutsOrdinaryForm: LazyComponent<typeof import("../components/forms/form-layouts/OrdinaryForm.vue")['default']>
export const LazyFormsFormValidationCheckBox: LazyComponent<typeof import("../components/forms/form-validation/CheckBox.vue")['default']>
export const LazyFormsFormValidationMailValidation: LazyComponent<typeof import("../components/forms/form-validation/MailValidation.vue")['default']>
export const LazyFormsFormValidationOnType: LazyComponent<typeof import("../components/forms/form-validation/OnType.vue")['default']>
export const LazyFormsFormValidationRadio: LazyComponent<typeof import("../components/forms/form-validation/Radio.vue")['default']>
export const LazyFormsFormValidationSelect: LazyComponent<typeof import("../components/forms/form-validation/Select.vue")['default']>
export const LazyFormsFormValidationTextInput: LazyComponent<typeof import("../components/forms/form-validation/TextInput.vue")['default']>
export const LazyFormsFormValidationVeeValidation: LazyComponent<typeof import("../components/forms/form-validation/VeeValidation.vue")['default']>
export const LazyFormsFormVerticalAccountDetailsTab: LazyComponent<typeof import("../components/forms/form-vertical/AccountDetailsTab.vue")['default']>
export const LazyFormsFormVerticalBasicLayout: LazyComponent<typeof import("../components/forms/form-vertical/BasicLayout.vue")['default']>
export const LazyFormsFormVerticalBasicWithIcons: LazyComponent<typeof import("../components/forms/form-vertical/BasicWithIcons.vue")['default']>
export const LazyFormsFormVerticalCollapsible: LazyComponent<typeof import("../components/forms/form-vertical/Collapsible.vue")['default']>
export const LazyFormsFormVerticalFormSeprator: LazyComponent<typeof import("../components/forms/form-vertical/FormSeprator.vue")['default']>
export const LazyFormsFormVerticalPersonalInfoTab: LazyComponent<typeof import("../components/forms/form-vertical/PersonalInfoTab.vue")['default']>
export const LazyFormsFormVerticalSocialLinksTab: LazyComponent<typeof import("../components/forms/form-vertical/SocialLinksTab.vue")['default']>
export const LazyFormsPluginsEditorMenu: LazyComponent<typeof import("../components/forms/plugins/editor/EditorMenu.vue")['default']>
export const LazyFormsPluginsEditorMenubar: LazyComponent<typeof import("../components/forms/plugins/editor/EditorMenubar.vue")['default']>
export const LazyFrontpagesAboutUsArchivement: LazyComponent<typeof import("../components/frontpages/AboutUs/Archivement.vue")['default']>
export const LazyFrontpagesAboutUsHeroText: LazyComponent<typeof import("../components/frontpages/AboutUs/HeroText.vue")['default']>
export const LazyFrontpagesAboutUsSetupProcess: LazyComponent<typeof import("../components/frontpages/AboutUs/SetupProcess.vue")['default']>
export const LazyFrontpagesContactUsContactForm: LazyComponent<typeof import("../components/frontpages/ContactUs/ContactForm.vue")['default']>
export const LazyFrontpagesContactUsContactMap: LazyComponent<typeof import("../components/frontpages/ContactUs/ContactMap.vue")['default']>
export const LazyFrontpagesHomepageClientReviews: LazyComponent<typeof import("../components/frontpages/Homepage/ClientReviews.vue")['default']>
export const LazyFrontpagesHomepageClientTabs: LazyComponent<typeof import("../components/frontpages/Homepage/ClientTabs.vue")['default']>
export const LazyFrontpagesHomepageComponies: LazyComponent<typeof import("../components/frontpages/Homepage/Componies.vue")['default']>
export const LazyFrontpagesHomepageContactBar: LazyComponent<typeof import("../components/frontpages/Homepage/ContactBar.vue")['default']>
export const LazyFrontpagesHomepageFAQ: LazyComponent<typeof import("../components/frontpages/Homepage/FAQ.vue")['default']>
export const LazyFrontpagesHomepageFeatureTabs: LazyComponent<typeof import("../components/frontpages/Homepage/FeatureTabs.vue")['default']>
export const LazyFrontpagesHomepageHighlights: LazyComponent<typeof import("../components/frontpages/Homepage/Highlights.vue")['default']>
export const LazyFrontpagesHomepageMainbanner: LazyComponent<typeof import("../components/frontpages/Homepage/Mainbanner.vue")['default']>
export const LazyFrontpagesHomepageOurClients: LazyComponent<typeof import("../components/frontpages/Homepage/OurClients.vue")['default']>
export const LazyFrontpagesHomepageOurTeam: LazyComponent<typeof import("../components/frontpages/Homepage/OurTeam.vue")['default']>
export const LazyFrontpagesHomepagePackages: LazyComponent<typeof import("../components/frontpages/Homepage/Packages.vue")['default']>
export const LazyFrontpagesHomepageProfessionalTabs: LazyComponent<typeof import("../components/frontpages/Homepage/ProfessionalTabs.vue")['default']>
export const LazyFrontpagesHomepagePurchaseTemplate: LazyComponent<typeof import("../components/frontpages/Homepage/PurchaseTemplate.vue")['default']>
export const LazyFrontpagesHomepageSecurePayment: LazyComponent<typeof import("../components/frontpages/Homepage/SecurePayment.vue")['default']>
export const LazyFrontpagesSharedTextBannerCard: LazyComponent<typeof import("../components/frontpages/Shared/TextBannerCard.vue")['default']>
export const LazyFrontpagesLayoutAnnounceBar: LazyComponent<typeof import("../components/frontpages/layout/AnnounceBar.vue")['default']>
export const LazyFrontpagesLayoutFooter: LazyComponent<typeof import("../components/frontpages/layout/Footer.vue")['default']>
export const LazyFrontpagesLayoutHeader: LazyComponent<typeof import("../components/frontpages/layout/Header.vue")['default']>
export const LazyFrontpagesLayoutNavigation: LazyComponent<typeof import("../components/frontpages/layout/Navigation.vue")['default']>
export const LazyJuridiqueCharteBonneConduite: LazyComponent<typeof import("../components/juridique/CharteBonneConduite.vue")['default']>
export const LazyLandingpageLayoutFooter: LazyComponent<typeof import("../components/landingpage/layout/Footer.vue")['default']>
export const LazyLandingpageLayoutHeader: LazyComponent<typeof import("../components/landingpage/layout/Header.vue")['default']>
export const LazyLandingpageLayoutMobileSidebar: LazyComponent<typeof import("../components/landingpage/layout/MobileSidebar.vue")['default']>
export const LazyLandingpageLayoutNavigation: LazyComponent<typeof import("../components/landingpage/layout/Navigation.vue")['default']>
export const LazyLandingpageLayoutPageMegamenu: LazyComponent<typeof import("../components/landingpage/layout/PageMegamenu.vue")['default']>
export const LazyLandingpageLayoutPageMenuQuicklinks: LazyComponent<typeof import("../components/landingpage/layout/PageMenuQuicklinks.vue")['default']>
export const LazyLandingpageSectionPurchase: LazyComponent<typeof import("../components/landingpage/section/Purchase.vue")['default']>
export const LazyLandingpageSectionRevolution: LazyComponent<typeof import("../components/landingpage/section/Revolution.vue")['default']>
export const LazyLandingpageSectionOtherFeatures: LazyComponent<typeof import("../components/landingpage/section/otherFeatures.vue")['default']>
export const LazyLandingpageSectionOurProducts: LazyComponent<typeof import("../components/landingpage/section/ourProducts.vue")['default']>
export const LazyLandingpageSectionUserReview: LazyComponent<typeof import("../components/landingpage/section/userReview.vue")['default']>
export const LazyLcFullCustomizer: LazyComponent<typeof import("../components/lc/Full/customizer/Customizer.vue")['default']>
export const LazyLcFullHorizontalHeader: LazyComponent<typeof import("../components/lc/Full/horizontal-header/index.vue")['default']>
export const LazyLcFullHorizontalSidebarNavCollapse: LazyComponent<typeof import("../components/lc/Full/horizontal-sidebar/NavCollapse/Index.vue")['default']>
export const LazyLcFullHorizontalSidebarNavItem: LazyComponent<typeof import("../components/lc/Full/horizontal-sidebar/NavItem/Index.vue")['default']>
export const LazyLcFullHorizontalSidebarHorizontalItems: LazyComponent<typeof import("../components/lc/Full/horizontal-sidebar/horizontalItems")['default']>
export const LazyLcFullHorizontalSidebar: LazyComponent<typeof import("../components/lc/Full/horizontal-sidebar/index.vue")['default']>
export const LazyLcFullVerticalHeaderAppsLink: LazyComponent<typeof import("../components/lc/Full/vertical-header/AppsLink.vue")['default']>
export const LazyLcFullVerticalHeaderNavigations: LazyComponent<typeof import("../components/lc/Full/vertical-header/Navigations.vue")['default']>
export const LazyLcFullVerticalHeaderNotificationDD: LazyComponent<typeof import("../components/lc/Full/vertical-header/NotificationDD.vue")['default']>
export const LazyLcFullVerticalHeaderProfileDD: LazyComponent<typeof import("../components/lc/Full/vertical-header/ProfileDD.vue")['default']>
export const LazyLcFullVerticalHeaderQuickLinks: LazyComponent<typeof import("../components/lc/Full/vertical-header/QuickLinks.vue")['default']>
export const LazyLcFullVerticalHeaderRightMobileSidebar: LazyComponent<typeof import("../components/lc/Full/vertical-header/RightMobileSidebar.vue")['default']>
export const LazyLcFullVerticalHeaderSearchbar: LazyComponent<typeof import("../components/lc/Full/vertical-header/Searchbar.vue")['default']>
export const LazyLcFullVerticalHeaderThemeToggler: LazyComponent<typeof import("../components/lc/Full/vertical-header/ThemeToggler.vue")['default']>
export const LazyLcFullVerticalHeader: LazyComponent<typeof import("../components/lc/Full/vertical-header/index.vue")['default']>
export const LazyLcFullVerticalSidebarDropDown: LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/DropDown/index.vue")['default']>
export const LazyLcFullVerticalSidebarIcon: LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/Icon.vue")['default']>
export const LazyLcFullVerticalSidebarMoreOption: LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/MoreOption/index.vue")['default']>
export const LazyLcFullVerticalSidebarNavCollapse: LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/NavCollapse/index.vue")['default']>
export const LazyLcFullVerticalSidebarNavGroup: LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/NavGroup/index.vue")['default']>
export const LazyLcFullVerticalSidebarNavItem: LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/NavItem/index.vue")['default']>
export const LazyLcFullVerticalSidebarExtrabox: LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/extrabox/index.vue")['default']>
export const LazyLcFullVerticalSidebar: LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/index.vue")['default']>
export const LazyLcFullVerticalSidebarItem: LazyComponent<typeof import("../components/lc/Full/vertical-sidebar/sidebarItem")['default']>
export const LazyPagesAccountSettingsAccountTab: LazyComponent<typeof import("../components/pages/account-settings/AccountTab.vue")['default']>
export const LazyPagesAccountSettingsBillsTab: LazyComponent<typeof import("../components/pages/account-settings/BillsTab.vue")['default']>
export const LazyPagesAccountSettingsNotificationTab: LazyComponent<typeof import("../components/pages/account-settings/NotificationTab.vue")['default']>
export const LazyPagesAccountSettingsSecurityTab: LazyComponent<typeof import("../components/pages/account-settings/SecurityTab.vue")['default']>
export const LazyPagesFaqQuestion: LazyComponent<typeof import("../components/pages/faq/FaqQuestion.vue")['default']>
export const LazyPagesFaqStillHaveQuestions: LazyComponent<typeof import("../components/pages/faq/StillHaveQuestions.vue")['default']>
export const LazyPagesSearchResultsSearchLinks: LazyComponent<typeof import("../components/pages/search-results/SearchLinks.vue")['default']>
export const LazyQuestionnairesCustomerForm: LazyComponent<typeof import("../components/questionnaires/CustomerForm.vue")['default']>
export const LazyQuestionnairesDynamicFormDialog: LazyComponent<typeof import("../components/questionnaires/DynamicFormDialog.vue")['default']>
export const LazyQuestionnairesFormField: LazyComponent<typeof import("../components/questionnaires/FormField.vue")['default']>
export const LazyQuestionnairesSectionController: LazyComponent<typeof import("../components/questionnaires/SectionController.vue")['default']>
export const LazyQuestionnairesServicesPrestataire: LazyComponent<typeof import("../components/questionnaires/ServicesPrestataire.vue")['default']>
export const LazyQuestionnairesValidationError: LazyComponent<typeof import("../components/questionnaires/ValidationError.vue")['default']>
export const LazySharedAppBaseCard: LazyComponent<typeof import("../components/shared/AppBaseCard.vue")['default']>
export const LazySharedAppEmailCard: LazyComponent<typeof import("../components/shared/AppEmailCard.vue")['default']>
export const LazySharedBaseBreadcrumb: LazyComponent<typeof import("../components/shared/BaseBreadcrumb.vue")['default']>
export const LazySharedBaseCard: LazyComponent<typeof import("../components/shared/BaseCard.vue")['default']>
export const LazySharedCardHeaderFooter: LazyComponent<typeof import("../components/shared/CardHeaderFooter.vue")['default']>
export const LazySharedProductBaseCard: LazyComponent<typeof import("../components/shared/ProductBaseCard.vue")['default']>
export const LazySharedUiChildCard: LazyComponent<typeof import("../components/shared/UiChildCard.vue")['default']>
export const LazySharedUiParentCard: LazyComponent<typeof import("../components/shared/UiParentCard.vue")['default']>
export const LazySharedUiParentCardLogo: LazyComponent<typeof import("../components/shared/UiParentCardLogo.vue")['default']>
export const LazySharedUiTableCard: LazyComponent<typeof import("../components/shared/UiTableCard.vue")['default']>
export const LazySharedUiTextfieldPrimary: LazyComponent<typeof import("../components/shared/UiTextfieldPrimary.vue")['default']>
export const LazySharedUiTittleSubtitleCard: LazyComponent<typeof import("../components/shared/UiTittleSubtitleCard.vue")['default']>
export const LazySharedWidgetCard: LazyComponent<typeof import("../components/shared/WidgetCard.vue")['default']>
export const LazySharedWidgetCardv2: LazyComponent<typeof import("../components/shared/WidgetCardv2.vue")['default']>
export const LazySharedECommerceCard: LazyComponent<typeof import("../components/shared/eCommerceCard.vue")['default']>
export const LazyStyleComponentsTypographyDefaultText: LazyComponent<typeof import("../components/style-components/typography/DefaultText.vue")['default']>
export const LazyStyleComponentsTypographyHeading: LazyComponent<typeof import("../components/style-components/typography/Heading.vue")['default']>
export const LazyStyleComponentsTypographyOpacity: LazyComponent<typeof import("../components/style-components/typography/Opacity.vue")['default']>
export const LazyStyleComponentsTypographyTextAlignment: LazyComponent<typeof import("../components/style-components/typography/TextAlignment.vue")['default']>
export const LazyStyleComponentsTypographyTextDecoration: LazyComponent<typeof import("../components/style-components/typography/TextDecoration.vue")['default']>
export const LazyTableTable1: LazyComponent<typeof import("../components/table/Table1.vue")['default']>
export const LazyTableTable2: LazyComponent<typeof import("../components/table/Table2.vue")['default']>
export const LazyTableTable3: LazyComponent<typeof import("../components/table/Table3.vue")['default']>
export const LazyTableTable4: LazyComponent<typeof import("../components/table/Table4.vue")['default']>
export const LazyTableTable5: LazyComponent<typeof import("../components/table/Table5.vue")['default']>
export const LazyUiComponentsAlertAction: LazyComponent<typeof import("../components/ui-components/alert/Action.vue")['default']>
export const LazyUiComponentsAlertBasic: LazyComponent<typeof import("../components/ui-components/alert/Basic.vue")['default']>
export const LazyUiComponentsAlertClosable: LazyComponent<typeof import("../components/ui-components/alert/Closable.vue")['default']>
export const LazyUiComponentsAlertDescription: LazyComponent<typeof import("../components/ui-components/alert/Description.vue")['default']>
export const LazyUiComponentsAlertFilled: LazyComponent<typeof import("../components/ui-components/alert/Filled.vue")['default']>
export const LazyUiComponentsAlertIcons: LazyComponent<typeof import("../components/ui-components/alert/Icons.vue")['default']>
export const LazyUiComponentsAlertOutlined: LazyComponent<typeof import("../components/ui-components/alert/Outlined.vue")['default']>
export const LazyUiComponentsAvatarBasicAvatar: LazyComponent<typeof import("../components/ui-components/avatar/BasicAvatar.vue")['default']>
export const LazyUiComponentsAvatarIconAvatar: LazyComponent<typeof import("../components/ui-components/avatar/IconAvatar.vue")['default']>
export const LazyUiComponentsAvatarImageAvatar: LazyComponent<typeof import("../components/ui-components/avatar/ImageAvatar.vue")['default']>
export const LazyUiComponentsAvatarLetterAvatar: LazyComponent<typeof import("../components/ui-components/avatar/LetterAvatar.vue")['default']>
export const LazyUiComponentsAvatarSizeAvatar: LazyComponent<typeof import("../components/ui-components/avatar/SizeAvatar.vue")['default']>
export const LazyUiComponentsAvatarVariantAvatar: LazyComponent<typeof import("../components/ui-components/avatar/VariantAvatar.vue")['default']>
export const LazyUiComponentsChipClosable: LazyComponent<typeof import("../components/ui-components/chip/Closable.vue")['default']>
export const LazyUiComponentsChipCustomIcon: LazyComponent<typeof import("../components/ui-components/chip/CustomIcon.vue")['default']>
export const LazyUiComponentsChipCustomIconOutlined: LazyComponent<typeof import("../components/ui-components/chip/CustomIconOutlined.vue")['default']>
export const LazyUiComponentsChipDisabled: LazyComponent<typeof import("../components/ui-components/chip/Disabled.vue")['default']>
export const LazyUiComponentsChipFilledColor: LazyComponent<typeof import("../components/ui-components/chip/FilledColor.vue")['default']>
export const LazyUiComponentsChipLabelChip: LazyComponent<typeof import("../components/ui-components/chip/LabelChip.vue")['default']>
export const LazyUiComponentsChipOutlined: LazyComponent<typeof import("../components/ui-components/chip/Outlined.vue")['default']>
export const LazyUiComponentsChipSizes: LazyComponent<typeof import("../components/ui-components/chip/Sizes.vue")['default']>
export const LazyUiComponentsDialogsActivator: LazyComponent<typeof import("../components/ui-components/dialogs/DialogsActivator.vue")['default']>
export const LazyUiComponentsDialogsForm: LazyComponent<typeof import("../components/ui-components/dialogs/DialogsForm.vue")['default']>
export const LazyUiComponentsDialogsFullscreen: LazyComponent<typeof import("../components/ui-components/dialogs/DialogsFullscreen.vue")['default']>
export const LazyUiComponentsDialogsModel: LazyComponent<typeof import("../components/ui-components/dialogs/DialogsModel.vue")['default']>
export const LazyUiComponentsDialogsNested: LazyComponent<typeof import("../components/ui-components/dialogs/DialogsNested.vue")['default']>
export const LazyUiComponentsDialogsPersistent: LazyComponent<typeof import("../components/ui-components/dialogs/DialogsPersistent.vue")['default']>
export const LazyUiComponentsDialogsScrollable: LazyComponent<typeof import("../components/ui-components/dialogs/DialogsScrollable.vue")['default']>
export const LazyUiComponentsDialogsTransitions: LazyComponent<typeof import("../components/ui-components/dialogs/DialogsTransitions.vue")['default']>
export const LazyUiComponentsExpansionpanelAdvance: LazyComponent<typeof import("../components/ui-components/expansionpanel/Advance.vue")['default']>
export const LazyUiComponentsExpansionpanelBasic: LazyComponent<typeof import("../components/ui-components/expansionpanel/Basic.vue")['default']>
export const LazyUiComponentsExpansionpanelCustomizedIcon: LazyComponent<typeof import("../components/ui-components/expansionpanel/CustomizedIcon.vue")['default']>
export const LazyUiComponentsExpansionpanelDefaultExpand: LazyComponent<typeof import("../components/ui-components/expansionpanel/DefaultExpand.vue")['default']>
export const LazyUiComponentsExpansionpanelInset: LazyComponent<typeof import("../components/ui-components/expansionpanel/Inset.vue")['default']>
export const LazyUiComponentsExpansionpanelPopout: LazyComponent<typeof import("../components/ui-components/expansionpanel/Popout.vue")['default']>
export const LazyUiComponentsListCustomAlignList: LazyComponent<typeof import("../components/ui-components/list/CustomAlignList.vue")['default']>
export const LazyUiComponentsListDisabledList: LazyComponent<typeof import("../components/ui-components/list/DisabledList.vue")['default']>
export const LazyUiComponentsListFolderList: LazyComponent<typeof import("../components/ui-components/list/FolderList.vue")['default']>
export const LazyUiComponentsListNestedList: LazyComponent<typeof import("../components/ui-components/list/NestedList.vue")['default']>
export const LazyUiComponentsListRoundedList: LazyComponent<typeof import("../components/ui-components/list/RoundedList.vue")['default']>
export const LazyUiComponentsListScrollableList: LazyComponent<typeof import("../components/ui-components/list/ScrollableList.vue")['default']>
export const LazyUiComponentsListSimpleList: LazyComponent<typeof import("../components/ui-components/list/SimpleList.vue")['default']>
export const LazyUiComponentsListSwitchList: LazyComponent<typeof import("../components/ui-components/list/SwitchList.vue")['default']>
export const LazyUiComponentsMenusActivatorTooltip: LazyComponent<typeof import("../components/ui-components/menus/MenusActivatorTooltip.vue")['default']>
export const LazyUiComponentsMenusAnchor: LazyComponent<typeof import("../components/ui-components/menus/MenusAnchor.vue")['default']>
export const LazyUiComponentsMenusHover: LazyComponent<typeof import("../components/ui-components/menus/MenusHover.vue")['default']>
export const LazyUiComponentsMenusPopover: LazyComponent<typeof import("../components/ui-components/menus/MenusPopover.vue")['default']>
export const LazyUiComponentsRattingBasicRatting: LazyComponent<typeof import("../components/ui-components/ratting/BasicRatting.vue")['default']>
export const LazyUiComponentsRattingClearableRatting: LazyComponent<typeof import("../components/ui-components/ratting/ClearableRatting.vue")['default']>
export const LazyUiComponentsRattingHalfRatting: LazyComponent<typeof import("../components/ui-components/ratting/HalfRatting.vue")['default']>
export const LazyUiComponentsRattingHoverRatting: LazyComponent<typeof import("../components/ui-components/ratting/HoverRatting.vue")['default']>
export const LazyUiComponentsRattingIconsRatting: LazyComponent<typeof import("../components/ui-components/ratting/IconsRatting.vue")['default']>
export const LazyUiComponentsRattingLabelRatting: LazyComponent<typeof import("../components/ui-components/ratting/LabelRatting.vue")['default']>
export const LazyUiComponentsRattingLengthRatting: LazyComponent<typeof import("../components/ui-components/ratting/LengthRatting.vue")['default']>
export const LazyUiComponentsRattingReadOnlyRatting: LazyComponent<typeof import("../components/ui-components/ratting/ReadOnlyRatting.vue")['default']>
export const LazyUiComponentsRattingSizeRatting: LazyComponent<typeof import("../components/ui-components/ratting/SizeRatting.vue")['default']>
export const LazyUiComponentsTabsAlignCenterTabs: LazyComponent<typeof import("../components/ui-components/tabs/AlignCenterTabs.vue")['default']>
export const LazyUiComponentsTabsAlignEndTabs: LazyComponent<typeof import("../components/ui-components/tabs/AlignEndTabs.vue")['default']>
export const LazyUiComponentsTabsBasicTabs: LazyComponent<typeof import("../components/ui-components/tabs/BasicTabs.vue")['default']>
export const LazyUiComponentsTabsCenterTabs: LazyComponent<typeof import("../components/ui-components/tabs/CenterTabs.vue")['default']>
export const LazyUiComponentsTabsColorTabs: LazyComponent<typeof import("../components/ui-components/tabs/ColorTabs.vue")['default']>
export const LazyUiComponentsTabsCustomIcons: LazyComponent<typeof import("../components/ui-components/tabs/CustomIcons.vue")['default']>
export const LazyUiComponentsTabsDisableTabs: LazyComponent<typeof import("../components/ui-components/tabs/DisableTabs.vue")['default']>
export const LazyUiComponentsTabsIconTabs: LazyComponent<typeof import("../components/ui-components/tabs/IconTabs.vue")['default']>
export const LazyUiComponentsTabsIconsWithLabelTabs: LazyComponent<typeof import("../components/ui-components/tabs/IconsWithLabelTabs.vue")['default']>
export const LazyUiComponentsTooltipIconTooltip: LazyComponent<typeof import("../components/ui-components/tooltip/IconTooltip.vue")['default']>
export const LazyUiComponentsTooltipSimpleTooltip: LazyComponent<typeof import("../components/ui-components/tooltip/SimpleTooltip.vue")['default']>
export const LazyUiComponentsTooltipToggleTolltip: LazyComponent<typeof import("../components/ui-components/tooltip/ToggleTolltip.vue")['default']>
export const LazyWidgetsBannersBanner1: LazyComponent<typeof import("../components/widgets/banners/Banner1.vue")['default']>
export const LazyWidgetsBannersBanner2: LazyComponent<typeof import("../components/widgets/banners/Banner2.vue")['default']>
export const LazyWidgetsBannersBanner3: LazyComponent<typeof import("../components/widgets/banners/Banner3.vue")['default']>
export const LazyWidgetsBannersBanner4: LazyComponent<typeof import("../components/widgets/banners/Banner4.vue")['default']>
export const LazyWidgetsBannersBanner5: LazyComponent<typeof import("../components/widgets/banners/Banner5.vue")['default']>
export const LazyWidgetsBannersBanner6: LazyComponent<typeof import("../components/widgets/banners/Banner6.vue")['default']>
export const LazyWidgetsCardsCongtsCard: LazyComponent<typeof import("../components/widgets/cards/CongtsCard.vue")['default']>
export const LazyWidgetsCardsPaymentGateway: LazyComponent<typeof import("../components/widgets/cards/PaymentGateway.vue")['default']>
export const LazyWidgetsCardsProfileBoxCards: LazyComponent<typeof import("../components/widgets/cards/ProfileBoxCards.vue")['default']>
export const LazyWidgetsCardsRecentTransactions: LazyComponent<typeof import("../components/widgets/cards/RecentTransactions.vue")['default']>
export const LazyWidgetsCardsTopCards: LazyComponent<typeof import("../components/widgets/cards/TopCards.vue")['default']>
export const LazyWidgetsChartsNetSells: LazyComponent<typeof import("../components/widgets/charts/NetSells.vue")['default']>
export const LazyWidgetsChartsPayingChart: LazyComponent<typeof import("../components/widgets/charts/PayingChart.vue")['default']>
export const LazyWidgetsChartsTraficDistributionChart: LazyComponent<typeof import("../components/widgets/charts/TraficDistributionChart.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
