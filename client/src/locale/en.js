export default {
  test: 'this is my test',
  testWithNum: 'this is my test with number {0}',
  chooseLanguage: 'choose Language',
  errorPopularOnYoutube: 'error on getting popular videos',
  supportInfo: 'support Info',
  testConfirmModalDate: 'choose date',
  fromDate: 'from date',
  no: 'no',
  yes: 'yes',
  continue: 'continue',
  update: 'update',
  error: 'error',
  success: 'success',
  cancel: 'cancel',
  info: 'info',
  warning: 'warning',
  warningTitle: 'warning',
  successTitle: 'success',
  errorTitle: 'error',
  errorTranslate: 'Translate error',
  // home page
  homeText: 'Our site offers a quick and free solution for problem of fair distribution (with a minimum number of shared items), using an algorithm developed by the best minds in the field of computer science and economics.',
  homeTextTitle: 'Fair distribution solutions.',
  home: 'home',
  about: 'about',
  divideGoods: 'division',
  explanations: 'explanations',
  // divide goods page
  objectsNames: 'objectsNames',
  evaluations: 'evaluations',
  participantsNames: 'participantsNames',
  goBack: 'go back',
  inputError: 'one or more input fields are invalid',
  resultAreReady: 'The results are ready - you can view them by clicking on the "View results" button',
  envyFree: 'envy-free distribution',
  proportional: 'proportional distribution ',
  howDoesTheAlgoWork: 'Our algorithm offers division between two or more people. You begin by providing a list of items that you wish to divide and a list of recipients. and then each  recipients  specify how much he believe each item is worth. and finally  you choose the type of the division (envy-free or proprtional)you want . Our algorithm uses these evaluations to propose a fair division of the items among the recipients.',
  // errors
  minLengthError: 'minLengthError',
  maxLengthError: 'maxLengthError',
  invalidNumber: 'invalidNumber',
  requiredField: 'required field',
  algoError: 'An error occurred while sending the algorithm',
  send: 'send',
  areYouSureCancel: 'are you sure tou want to cancel? all the input will delete',
  startAlgo: 'start the algorithm',
  viewResult: 'view the result',
  participantsEvaluations: 'participants evaluations',
  generalResult: 'general result',
  explanation: 'explanation',
  hisShare: 'the part of {0} according to {1} evaluation his :{2} ({3})',
  envyFreeConclusion: 'we can see that by the evaluation of {0} his share is greater or equal to all the others and therefore {1} is not jealous of anyone!',
  proportionalConclusion: 'we can see that by the evaluation of {0} his share is greater or equal to {1}  and therefore according to {2} this is a proportional division!',
  eliahuName: 'Eliahu Satat',
  eliahuTitle: 'FullStack Web Developer',
  eliahuDescription: 'Eliahu Satat received his B.S. In Computer Science from Ariel University in 2021.\n He completed his final project with Dr. Erel Segal - implementation of an algorithm for fair distribution in Python.\n' +
    'After graduating, he decided to build a website for the Algorithm, which he implemented as a personal project.\n',
  explanationParagraph1: '<h2 style="color: #2e6c80;">General concepts and explanation:</h2>\n' +
    '<p>Our site offers 2 distribution options:<br /><b>Proportional distribution</b> <b>and envy-free distribution.</b><br /><b>Proportional distribution</b> It is a share in which each participant receives at his own estimation at least 1 \\ (number of participants) of the total value of the items participating in the distribution.<br /><b>envy-free distribution</b> It is a division in which each participant feels (at his own eyes) that he  has received a share that is no less than any part of the other participants.<br />Sounds confusing?<br />Let\'s look at a simple example that will explain everything :\n' +
    'Suppose we have three brothers Ami Rami and Tami who inherited three apartments (housing unit, penthouse and private house) and they want to divide them between the three so that everyone will be happy.<br />\n' +
    'Since the value of things is a subjective thing and everyone sees things differently - each participant should evaluate how much each of the objects participating in the distribution is worth in his eyes.<br />\n' +
    'So for the sake of our example, let\'s say that this is how each of the brothers valued the apartments:<br />\n' +
    '</p>',
  housingUnit: 'housing unit',
  penthouse: 'penthouse',
  privateHouse: 'private house',
  name: 'name',
  Hami: 'Hami',
  Tami: 'Tami',
  Rami: 'Rami',
  explanationParagraph2: '<p>In other words, Ami estimates the private house at 400,000, the penthouse at half a million and the housing unit at 100,000, etc.<br />\n' +
    'Then let\'s see an example of proportional division:<br />\n' +
    '</p>',
  explanationParagraph3: '<p>\n' +
    'Let us note that this is indeed a proportional division <br />\n' +
    'Ami gets the whole penthouse and in his eyes it\'s worth 500 which is more than 333 (1/3 out of 1000 which is the sum of all the items to be divided) <br />\n' +
    'Tammy\'s share in her eyes is 454.2 which is more than 333<br />\n' +
    'Remy\'s share in his eyes is 407.95 which is more than 333<br />\n' +
    'lets note that this is not an envy-free division  because Remy is jealous of Tammy - according to Remy\'s estimate his share is 407.95 but according to his estimate Tami\'s share is 492 so he is jealous of her.<br />\n' +
    'And now let\'s look at an example of an envy-free division :<br />\n' +
    '</p>',
  explanationParagraph4: '<p>\n' +
    'Why this is an envy-free division :<br />\n' +
    'According to Ami\'s assessment:<br />\n' +
    'Ami\'s part: 1*500 = 500<br />\n' +
    'Tami\'s part: 0.65*400 = 260<br />\n' +
    'Remy\'s part = 0.35*400 + 1*100 = 240<br />\n' +
    'As you can see Ami is not jealous.<br /><br />\n' +
    '\n' +
    'According to Tami\'s assessment:<br />\n' +
    'Ami\'s part: 1*300 = 300<br />\n' +
    'Tami\'s part: 0.65*600 = 390<br />\n' +
    'Remy\'s part = 0.35*600 + 1*100 = 310<br />\n' +
    'As you can see Tami is not jealous.<br /><br />\n' +
    '\n' +
    'According to Remy\'s assessment:<br />\n' +
    'Ami\'s part: 1*100 = 100<br />\n' +
    'Tami\'s part: 0.65*650 = 422.5<br />\n' +
    'Remy\'s part = 0.35*650 + 1*250 = 477.5<br />\n' +
    'As you can see Remy is not jealous.<br /><br />\n' +
    'Therefore it is aמ  envy-free division . <br />Let us note that in both divisions only the private house is divided between Remi and Tami and our algorithm ensures that this is the minimum option - meaning that it is not possible to divide these items according to this estimate without envy with less divided items.<br />\n' +
    '<br />\n' +
    '</p>'

}
