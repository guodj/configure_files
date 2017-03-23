var IntroTutorialWelcomeDialog = function(dialog) {
  Dialog.call(this, dialog, {
    closeButtonEnabled: false,
    maximizeButtonEnabled: false,
    dynamicHeight: true,
    hideHeader: true,
    hideButtons: true,
    confirmOnClose: false
   });
};

// Extend Dialog
IntroTutorialWelcomeDialog.prototype = Object.create(Dialog.prototype);
IntroTutorialWelcomeDialog.prototype.constructor = IntroTutorialWelcomeDialog;

(function() {
  IntroTutorialWelcomeDialog.prototype.initialize = function (element) {
    Dialog.prototype.initialize.apply(this, arguments);
    (function (dialog) {
      var addSiteElement = element.find('#addSiteLink');
      var importSitesElement = element.find('#importLink');
      var noThanksElement = element.find('#noThanks, #btnClose');
      var importHandlers = {
        addEmailSites: {
          btnText: Strings.translateString('Add sites from email'),
          handlerFn: function (event) {
            event.preventDefault();
            oneMinuteSignup.show(oneMinuteSignup.modes.normal);
            IntroTutorialImprove.improveLP('shadingwelcome', 'oneMinuteSignup');
            LPProxy.setPreferences('ShowIntroTutorial', false);
            if (bg && bg.g_introTutorialStatus) {
              bg.g_introTutorialStatus.setStatus(false);
            }
            dialog.close(true);
          }
        },
        importerHandler: {
          btnText: Strings.translateString('Download Importer'),
          handlerFn: function (event) {
            event.preventDefault();
            window.location = LPProxy.getBaseURL() + 'installer';
            IntroTutorialImprove.improveLP('shadingwelcome', 'download');
            IntroTutorialImprove.improveLP('downloadimporter', 'welcome');
            dialog.close(true);
          }
        }
      };
      var handlerName = LPPlatform.getImportHandler();
      if(handlerName && importHandlers.hasOwnProperty(handlerName)) {
        importSitesElement.text(importHandlers[handlerName].btnText);
      }

      function bindAddSite(event) {
        event.preventDefault();
        IntroTutorialImprove.improveLP('shadingwelcome', 'addsite');
        dialog.close(true);
        dialogs.introTutorialSelectSite.open();
      }

      addSiteElement.bind('click', bindAddSite);
      importSitesElement.bind('click', function (event) {
        var handlerName = LPPlatform.getImportHandler();
        if(handlerName && importHandlers.hasOwnProperty(handlerName)) {
          importHandlers[handlerName].handlerFn(event);
        }
      });

      noThanksElement.bind('click', function (event) {
        event.preventDefault();
        IntroTutorialImprove.improveLP('shadingwelcome', 'nothanks');
        dialog.close(true);
        LPVault.openTour();
      });

    })(this);
  };


  if (LPPlatform.getImportHandler() == 'addEmailSites'){
    IntroTutorialImprove.improveLP('omsseen', 'seen');
  }

  IntroTutorialWelcomeDialog.prototype.close = function (forceClose) {
    if (!forceClose) {
      (function (dialog) {
        dialogs.confirmation.open({
          title: Strings.translateString("Close"),
          text: Strings.translateString("Are you sure You'd like to exit the tutorial?"),
          handler: function () {
            IntroTutorialImprove.improveLP('shadingwelcome', 'nothanks');
            dialog.close(true);
          }
        });
      })(this);
    }
    else {
      Dialog.prototype.close.call(this, forceClose);
    }
  };
})();
