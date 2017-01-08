/**
 * Used for external and internal links
 * name: string, iconPath?: string, externalLink?: string, internalLink?: string, internalParams?: Object, show? Function
 */
export class Link {
  public name: string;
  public externalLink: string;
  public internalLink: string;
  public internalParams: Object;
  public iconPath: string;

  constructor(name: string, iconPath?: string,
              externalLink?: string, internalLink?: string,
              internalParams?: Object) {
    this.name = name;
    this.externalLink = externalLink;
    this.internalLink = internalLink;
    this.internalParams = internalParams;
    this.iconPath = iconPath;
  }
}
