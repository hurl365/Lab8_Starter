# Lab 8 - Starter

1) The automatic testing should be included within a GitHub Action that runs whenever code is pushed onto the repository. In this case, the testing result is visibly logged for all team members' reference, and testing can take place as frequently as possible. GitHub Actions allows us to integrate Testing seamlessly in our CI/CD pipeline, which will significantly increase our efficiency.
2) No. Unit tests should be applied on the verification of individual function's return values.
3) No. Message feature involves some complicated functionality, and it will likely involve multiple users/parties. It will be easier to simply emulate the interaction between the user and the application to see if it is functioning normally.
4) Yes. Since this test is aiming to verify a specific design choice that can be handled by very few functionalities, it is reasonable to use a unit test to see if the maximum message length is implemented corrected.