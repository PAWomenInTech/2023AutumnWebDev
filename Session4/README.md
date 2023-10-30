# Code Along Notes

## Initial Setup

* Create New Repo
  * Log in to [GitHub](https://github.com)
  * Create New Repo
    * Any Name, Make Public, Create `README.md`
      ![RepoSetup](assets/repo-setup.png)  
  * Create new Action Pipeline to publish `./src`
    ![GitHub Pages](assets/repo-github-pages.png)
    ![GitHub Pages Action Pipeline](assets/repo-github-pages-actions.png)
    ![GitHub Pages Action Static HTML](assets/repo-github-pages-static-html.png)
    ![GitHub Pages Action Publish `src`](assets/repo-github-pages-src.png)
    `Commit Changes`
* Clean VSCode Setup
  * Create new Profile (to ensure no extension or settings conflicts, etc)
    ![New Profile](assets/new-vscode-profile.png)
  * Clone Repo via VS Code
* Setup `./src` folder
    * Basic `index.html`
* Setup VSCode Workspace
  * Install Extension
    * [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
    * Open the `Settings`
      ![Edit Settings](assets/new-vscode-workspace-settings.png)
    * Toggle to `Workspace` Settings and filter to `livePreview.serverRoot`
      ![ServerRoot](assets/vscode-livepreview.png)
      Set to `./src`
    * This should create a new file `.vscode/settings.json` with the contents: 
      ```json
      {
          "livePreview.serverRoot": "./src"
      }
      ```
    * The LivePreview extension and published website should now work in the same way


## Setup Template with Wireframe CSS