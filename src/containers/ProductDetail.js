import React from 'react';
const TcProduct1 = '/public/assets/images/tc-product-1.png';
const TcProduct2 = '/public/assets/images/tc-product-2.png';
const TcProduct3 = '/public/assets/images/tc-product-3.png';
const ProductPreview = '/public/assets/images/product-preview.png';
const Swatch1 = '/public/assets/images/swatch-1.png';
const Swatch2 = '/public/assets/images/swatch-2.png';
const Swatch3 = '/public/assets/images/swatch-3.png';
const Swatch4 = '/public/assets/images/swatch-4.png';
const Swatch5 = '/public/assets/images/swatch-5.png';
const Swatch6 = '/public/assets/images/swatch-6.png';
const Swatch7 = '/public/assets/images/swatch-7.png';
const Swatch8 = '/public/assets/images/swatch-8.png';
const Swatch9 = '/public/assets/images/swatch-9.png';
const Swatch10 = '/public/assets/images/swatch-10.png';
const Swatch11 = '/public/assets/images/swatch-11.png';
const CollectionCon = '/public/assets/images/collection-con.png';
const PdpProduct1 = '/public/assets/images/pdp-product-1.png';
const ThProduct1 = '/public/assets/images/th-product-1.png';
const PdpProduct3 = '/public/assets/images/pdp-product-3.png';
const PdpProduct2 = '/public/assets/images/pdp-product-2.png';
const ThProduct2 = '/public/assets/images/th-product-2.png';
const ThProduct3 = '/public/assets/images/th-product-3.png';
const PdpProduct4 = '/public/assets/images/pdp-product-4.png';
const ThProduct4 = '/public/assets/images/th-product-4.png';
const PdpProduct5 = '/public/assets/images/pdp-product-5.png';
const ThProduct5 = '/public/assets/images/th-product-5.png';
const PdpProduct7 = '/public/assets/images/pdp-product-7.png';
const ThProduct7 = '/public/assets/images/th-product-7.png';
const One = '/public/assets/images/1.png';
const Two = '/public/assets/images/2.png';
const Three = '/public/assets/images/3.png';
const Four = '/public/assets/images/4.png';

export class ProductPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="pdp-details-wrapper" className="padt20">
        <div id="pdp-detail-container" className="pdp-detail-cont">
          <div id="pdp-breadcrum-div" className="pdp-bed-div">
            jcpenney &gt; bed &amp; bath &gt; quits &amp; bedspreads &gt; return to product results
          </div>
          <div id="pdp-webid-div" className="padt20 pdp-web-id">WebID: 7215320</div>
          <div id="product-detail-div" className="padt10">
            <div id="product-title-div" className="product-title">Bensonhurst Bedspread</div>
            <div id="product-rating-div" className="padt10">
              <div id="product-star-div" />
              <div id="product-reviw-count-div">675 Reviews  |  2 Questions &amp; 5 Answers</div>
            </div>
            <div id="product-detail-img-div">
              <div id="pro-img-variant" className="pro-img-var-div inline">
                <ul>
                  <li><img src={TcProduct1} data="product-preview.png" /></li>
                  <li><img src={TcProduct2} data="product-preview.png" /></li>
                  <li><img src={TcProduct3} data="product-preview.png" /></li>
                </ul>
              </div>
              <div id="pro-big-img" className="pro-big-img-div inline">
                <a href="javascript:void(0);">
                  <img src={ProductPreview} />
                </a>
              </div>
              <div id="pro-detail-variant" className="pro-detail-variant  inline ">
                <div className="pro-detail-variant-top padb30">
                  <div id="discounted-price" className="discounted-price-div">
                    $21.99 - $119.99  <sub className="ymal-dis">sale</sub>
                  </div>
                  <div id="original-price" className="original-price-div padt5">
                    was $50 - $300 | original
                  </div>
                  <div className="product-size-var-div">
                    <span>SIZE</span>
                    <span id="select-size-error" className="pdpErrorMsg">
                      Dont forget to select a <strong> size</strong>
                    </span>
                    <div className="custom-dropdown cp-sort">
                      <span>Select Size</span>
                      <select id="product-size-varient">
                        <option value="full">FULL</option>
                        <option value="queen">QUEEN</option>
                        <option value="king">KING</option>
                      </select>
                    </div>
                  </div>
                  <div id="product-col-var" className="product-col-var-div padt20">
                    <div>COLOR</div>
                    <span id="select-color-error" className="pdpErrorMsg">
                      Dont forget to select a <strong> color</strong>
                    </span>
                    <div className="padt5">
                      <ul>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={36} alt width={36} name="Blue" src={Swatch1} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline padL5">
                          <a className="swatch">
                            <img title height={36} alt width={36} name="Blue" src={Swatch2} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline padL5">
                          <a className="swatch">
                            <img title height={36} alt width={36} name="Blue" src={Swatch3} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline padL5">
                          <a className="swatch">
                            <img title height={36} alt width={36} name="Blue" src={Swatch4} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline padL5">
                          <a className="swatch">
                            <img title height={36} alt width={36} name="Blue" src={Swatch5} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline padL5">
                          <a className="swatch">
                            <img title height={36} alt width={36} name="Blue" src={Swatch6} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline padL5">
                          <a className="swatch">
                            <img title height={36} alt width={36} name="Blue" src={Swatch7} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline padL5">
                          <a className="swatch">
                            <img title height={36} alt width={36} name="Blue" src={Swatch8} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline padL5">
                          <a className="swatch">
                            <img title height={36} alt width={36} name="Blue" src={Swatch9} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline padL5">
                          <a className="swatch">
                            <img title height={36} alt width={36} name="Blue" src={Swatch10} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline padL5">
                          <a className="swatch">
                            <img title height={36} alt width={36} name="Blue" src={Swatch11} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="pro-detail-variant-bottom padt30">
                  <div id="product-del-opt-var" className="product-del-opt-var-div inline">
                    <div className="product-del-opt-home-div ">
                      <div className="pdp-var-lable-lar"><span>Ship to Home</span></div>
                      <div className="padt5">
                        <span>
                          <input type="radio" name="r1" defaultChecked="checked" id="pickUpInStore" className="checkbox" />
                          <label htmlFor="pickUpInStore" className="checkbox-label">
                            <span />
                          </label>
                        </span>
                        <span className="padl26 select-ship-mode ">
                          <div>Order within 3 hrs 8 mins to get it by Sept 16th</div>
                          <div className="padt5"><a href>See Shipping Options</a></div>
                          <div className="padt10 shipping-charge">$3.35  oversized item surcharge</div>
                        </span>
                      </div>
                    </div>
                    <div className="product-del-opt-store-div padt20">
                      <div className="pdp-var-lable-lar"><span>Pick Up In Store FREE</span></div>
                      <div className="padt5">
                        <span>
                          <input type="radio" name="r1" defaultChecked="checked" id="homeDel" className="checkbox" />
                          <label htmlFor="homeDel" className="checkbox-label">
                            <span />
                          </label>
                        </span>
                        <span className="padl26 select-ship-mode">
                          <div>Available at Stonebriar Mall</div>
                          <div className="padt5"> <a href>Change Store </a></div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div id="product-quant-var" className="product-quant-var-div inline">
                    <div className="pd-add-dropdown">
                      <span>QUANTITY</span>
                      <div className="custom-dropdown pd-sort">
                        <span>1</span>
                        <select id="product-quantity-varient">
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                    </div>
                    <form id="add-to-cart-form" action="#">
                      <input type="hidden" name="seleted-color" id="selected-size-input" data-error="select-size-error" defaultValue />
                      <input type="hidden" name="selected-size" id="selected-color-input" data-error="select-color-error" defaultValue />
                      <input type="hidden" name="quantity" id="selected-quantity-input" defaultValue={1} />
                    </form>
                    <div>
                      <div className="button-wrapper">
                        <button className="redButton" id="add-to-cart" data-url="/add-to-cart"> ADD TO BAG</button>
                      </div>
                      <div className="button-wrapper">
                        <button className="whiteButton save-for-leter" id="save-for-leter" data-url="/save-for-leter"> SAVE FOR LATER</button>
                      </div>
                      <div className="button-wrapper">
                        <button className="whiteButton add-to-registry" id="add-to-registry" data-url="/add-to-regestry"> ADD TO REGISTRY</button>
                      </div>
                    </div>
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="pdp-shop-collection-container" className="mrgt43 pdp-shop-collection-container-div">
          <div className="pdp-sc-header">
            <span className="sc-header-img"><img src={CollectionCon} /></span>
            <span className="sc-header-title">SHOP THIS COLLECTION</span>
          </div>
          <div className="current-product">
            <h3 className="current-product-title">CURRENT PRODUCT</h3>
            <div className="cp-select-product">
              <a href="javascript:void(0);" >
                <img src={PdpProduct1} alt="product" />
              </a>
              <span className="cp-product-description">Bensonhurst Bedspread</span>
              <span className="cp-product-price">$21.99-$119.99<sub>sale</sub></span>
              <span className="cp-previous-product-price">was $50-$300 | original</span>
              <div className="cp-rating-star">
                <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                <span className="cp-rating-number">(11)</span>
              </div>
              <span className="cp-included tooltip">What is included?</span>
              <div className="tooltip-container">
                <p>2-piece Twin comforter set includes:</p>
                <ul>
                  <li>comforter</li>
                  <li>sham</li>
                </ul>
                <p>3-piece Ful/Queen or King comforter set includes:</p>
                <ul>
                  <li>comforter</li>
                  <li>2 sham</li>
                </ul>
              </div>
              <div className="cp-select">
                <button>Select Option</button>
              </div>
            </div>
            <div className="cp-add-product" id="product-1" style={{display: 'none'}}>
              <div className="cp-add-img-desc">
                <img src={ThProduct1} alt="product-add" />
                <span className="cp-add-product-description">Bensonhurst Bedspread</span>
              </div>
              <div className="clr-fix" />
              <span className="cp-add-product-price">$21.99-$119.99<sub>sale</sub></span>
              <span className="cp-add-previous-product-price">was $50-$300 | original</span>
              <div className="cp-add-dropdown">
                <span>SIZE</span>
                <div className="custom-dropdown cp-sort">
                  <span>Select size</span>
                  <select className="cp-size-select">
                    <option value="full">FULL</option>
                    <option value="queen">QUEEN</option>
                    <option value="king">KING</option>
                  </select>
                </div>
                <span className="cp-error-msg cp-size-error">Please Select a Size</span>
              </div>
              <div className="cp-color-carousel-cont">
                <span><b>COLOR</b> <span className="colorName hide">Lustrous Steel</span></span>
                <ul className="bxslider5 cp-color-carousel-ul">
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Pewter" src={Swatch1} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Ivory" src={Swatch2} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Primitive Brown" src={Swatch3} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Gray" src={Swatch4} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Empire Red" src={Swatch5} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Majestic yellow" src={Swatch6} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Tofee" src={Swatch7} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Coffee" src={Swatch8} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Royal Blue" src={Swatch9} />
                    </a>
                  </li>
                </ul>
                <span className="cp-error-msg cp-color-error">Please Select a Color</span>
              </div>
              <div className="cp-add-dropdown">
                <span>QUANTITY</span>
                <div className="custom-dropdown cp-sort">
                  <span>1</span>
                  <select className="cp-quantity-select">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </div>
              </div>
              <form className="add-shop-collection-form" action="#">
                <input type="hidden" name="seleted-color" className="shop-collection-selected-size" data-error="cp-size-error" defaultValue />
                <input type="hidden" name="selected-size" className="shop-collection-selected-color" data-error="cp-color-error" defaultValue />
                <input type="hidden" name="quantity" className="shop-collection-selected-quantity" defaultValue={1} />
              </form>
              <div className="remove-selection hide">Remove</div>
              <div className="cp-add" data="cs-product-1.png">
                <button className="cp-add-btn">Done</button>
              </div>
              <div className="cp-update hide">
                <button className="colp-update-btn">Update</button>
              </div>
            </div>
          </div>
          <div className="collection-product" id="pdp-shop-collection-list-container">
            <ul className="bxslider4">
              <li style={{display: 'inline'}}>
                <div className="each-collection-product">
                  <div className="cp-select-product">
                    <a href="javascript:void(0);" >
                      <img src={PdpProduct2} alt="product"/>
                    </a>
                    <span className="cp-product-description">Bensonhurst Euro Sham</span>
                    <span className="cp-product-price">$41.99 <sub>sale</sub></span>
                    <span className="cp-previous-product-price">was $70 | original</span>
                    <div className="cp-rating-star">
                      <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      <span className="cp-rating-number">(11)</span>
                    </div>
                    <span className="cp-included tooltip">What is included?</span>
                    <div className="tooltip-container">
                      <p>2-piece Twin comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>sham</li>
                      </ul>
                      <p>3-piece Ful/Queen or King comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>2 sham</li>
                      </ul>
                    </div>
                    <div className="cp-select">
                      <button>Select Option</button>
                    </div>
                  </div>
                  <div className="cp-add-product" id="product-2" style={{display: 'none'}}>
                    <div className="cp-add-img-desc">
                      <img src={ThProduct2} alt="product-add" />
                      <span className="cp-add-product-description">Bensonhurst Euro Sham</span>
                    </div>
                    <div className="clr-fix" />
                    <span className="cp-add-product-price">$41.99 <sub>sale</sub></span>
                    <span className="cp-add-previous-product-price">was $70 | original</span>
                    <div className="cp-color-carousel-cont">
                      <span><b>COLOR</b> <span className="colorName hide">Lustrous Steel</span></span>
                      <ul className="bxslider5">
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Pewter" src={Swatch1} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Ivory" src={Swatch2} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Primitive Brown" src={Swatch3} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Gray" src={Swatch4} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Empire Red" src={Swatch5} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Majestic yellow" src={Swatch6} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Tofee" src={Swatch7} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Coffee" src={Swatch8} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Royal Blue" src={Swatch9} />
                          </a>
                        </li>
                      </ul>
                      <span className="cp-error-msg colp-color-error">Please Select a Color</span>
                    </div>
                    <div className="cp-add-dropdown">
                      <span>QUANTITY</span>
                      <div className="custom-dropdown cp-sort">
                        <span>1</span>
                        <select>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                    </div>
                    <form className="add-shop-collection-form" action="#">
                      {/* <input type="hidden" name="seleted-color" class="shop-collection-selected-size" data-error="colp-size-error" value=""> */}
                      <input type="hidden" name="selected-size" className="shop-collection-selected-color" data-error="colp-color-error" defaultValue />
                      <input type="hidden" name="quantity" className="shop-collection-selected-quantity" defaultValue={1} />
                    </form>
                    <div className="remove-selection hide">Remove</div>
                    <div className="cp-add" data="cs-product-2.png">
                      <button className="colp-add-btn">Done</button>
                    </div>
                    <div className="cp-update hide">
                      <button className="colp-update-btn">Update</button>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{display: 'inline'}}>
                <div className="each-collection-product">
                  <div className="cp-select-product">
                    <a href="javascript:void(0);" >
                      <img src={PdpProduct3}alt="product" />
                    </a>
                    <span className="cp-product-description">Bensonhurst Pillow Sham</span>
                    <span className="cp-product-price">$21.99 <sub>sale</sub></span>
                    <span className="cp-previous-product-price">was $60 | original</span>
                    <div className="cp-rating-star">
                      <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      <span className="cp-rating-number">(11)</span>
                    </div>
                    <span className="cp-included tooltip">What is included?</span>
                    <div className="tooltip-container">
                      <p>2-piece Twin comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>sham</li>
                      </ul>
                      <p>3-piece Ful/Queen or King comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>2 sham</li>
                      </ul>
                    </div>
                    <div className="cp-select">
                      <button>Select Option</button>
                    </div>
                  </div>
                  <div className="cp-add-product" id="product-3" style={{display: 'none'}}>
                    <div className="cp-add-img-desc">
                      <img src={ThProduct3} alt="product-add" />
                      <span className="cp-add-product-description">Bensonhurst Pillow Sham</span>
                    </div>
                    <div className="clr-fix" />
                    <span className="cp-add-product-price">$21.99 <sub>sale</sub></span>
                    <span className="cp-add-previous-product-price">was $60 | original</span>
                    <div className="cp-add-dropdown">
                      <span>SIZE</span>
                      <div className="custom-dropdown cp-sort">
                        <span>Select size</span>
                        <select className="colp-size-sel">
                          <option value="queen">STANDARD</option>
                          <option value="king">KING</option>
                        </select>
                      </div>
                      <span className="cp-error-msg colp-size-error">Please Select a Size</span>
                    </div>
                    <div className="cp-color-carousel-cont">
                      <span><b>COLOR</b> <span className="colorName hide">Lustrous Steel</span></span>
                      <ul className="bxslider5">
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Pewter" src={Swatch1} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Ivory" src={Swatch2} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Primitive Brown" src={Swatch3} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Gray" src={Swatch4} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Empire Red" src={Swatch5} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Majestic yellow" src={Swatch6} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Tofee" src={Swatch7} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Coffee" src={Swatch8} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Royal Blue" src={Swatch9} />
                          </a>
                        </li>
                      </ul>
                      <span className="cp-error-msg colp-color-error">Please Select a Color</span>
                    </div>
                    <div className="cp-add-dropdown">
                      <span>QUANTITY</span>
                      <div className="custom-dropdown cp-sort">
                        <span>1</span>
                        <select>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                    </div>
                    <form className="add-shop-collection-form" action="#">
                      <input type="hidden" name="seleted-color" className="shop-collection-selected-size" data-error="colp-size-error" defaultValue />
                      <input type="hidden" name="selected-size" className="shop-collection-selected-color" data-error="colp-color-error" defaultValue />
                      <input type="hidden" name="quantity" className="shop-collection-selected-quantity" defaultValue={1} />
                    </form>
                    <div className="remove-selection hide">Remove</div>
                    <div className="cp-add" data="cs-product-3.png">
                      <button className="colp-add-btn">Done</button>
                    </div>
                    <div className="cp-update hide">
                      <button className="colp-update-btn">Update</button>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{display: 'inline'}}>
                <div className="each-collection-product">
                  <div className="cp-select-product">
                    <a href="javascript:void(0);" >
                      <img src={PdpProduct4} alt="product"/>
                    </a>
                    <span className="cp-product-description">Bensonhurst Pleated Square Decorative Pillow</span>
                    <span className="cp-product-price">$24.99 <sub>sale</sub></span>
                    <span className="cp-previous-product-price">was $50 | original</span>
                    <div className="cp-rating-star">
                      <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      <span className="cp-rating-number">(11)</span>
                    </div>
                    <span className="cp-included tooltip">What is included?</span>
                    <div className="tooltip-container">
                      <p>2-piece Twin comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>sham</li>
                      </ul>
                      <p>3-piece Ful/Queen or King comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>2 sham</li>
                      </ul>
                    </div>
                    <div className="cp-select">
                      <button>Select Option</button>
                    </div>
                  </div>
                  <div className="cp-add-product" id="product-4" style={{display: 'none'}}>
                    <div className="cp-add-img-desc">
                      <img src={ThProduct4} alt="product-add" />
                      <span className="cp-add-product-description">Bensonhurst Pleated Square Decorative Pillow</span>
                    </div>
                    <div className="clr-fix" />
                    <span className="cp-add-product-price">$24.99 <sub>SALE</sub></span>
                    <span className="cp-add-previous-product-price">was $50 | originsal</span>
                    <div className="cp-color-carousel-cont">
                      <span><b>COLOR</b> <span className="colorName hide">Lustrous Steel</span></span>
                      <ul className="bxslider5">
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Pewter" src={Swatch1} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Ivory" src={Swatch2} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Primitive Brown" src={Swatch3} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Gray" src={Swatch4} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Empire Red" src={Swatch5} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Majestic yellow" src={Swatch6} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Tofee" src={Swatch7} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Coffee" src={Swatch8} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Royal Blue" src={Swatch9} />
                          </a>
                        </li>
                      </ul>
                      <span className="cp-error-msg colp-color-error">Please Select a Color</span>
                    </div>
                    <div className="cp-add-dropdown">
                      <span>QUANTITY</span>
                      <div className="custom-dropdown cp-sort">
                        <span>1</span>
                        <select>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                    </div>
                    <form className="add-shop-collection-form" action="#">
                      {/* <input type="hidden" name="seleted-color" class="shop-collection-selected-size" data-error="colp-size-error" value=""> */}
                      <input type="hidden" name="selected-size" className="shop-collection-selected-color" data-error="colp-color-error" defaultValue />
                      <input type="hidden" name="quantity" className="shop-collection-selected-quantity" defaultValue={1} />
                    </form>
                    <div className="remove-selection hide">Remove</div>
                    <div className="cp-add" data="cs-product-4.png">
                      <button className="colp-add-btn">Done</button>
                    </div>
                    <div className="cp-update hide">
                      <button className="colp-update-btn">Update</button>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{display: 'inline'}}>
                <div className="each-collection-product">
                  <div className="cp-select-product">
                    <a href="javascript:void(0);" >
                      <img src={PdpProduct5} alt="product"/>
                    </a>
                    <span className="cp-product-description">Bensonhurst Tufted Square Decorative Pillow </span>
                    <span className="cp-product-price">$29.99 <sub>sale</sub></span>
                    <span className="cp-previous-product-price">was $50 | original</span>
                    <div className="cp-rating-star">
                      <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      <span className="cp-rating-number">(11)</span>
                    </div>
                    <span className="cp-included tooltip">What is included?</span>
                    <div className="tooltip-container">
                      <p>2-piece Twin comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>sham</li>
                      </ul>
                      <p>3-piece Ful/Queen or King comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>2 sham</li>
                      </ul>
                    </div>
                    <div className="cp-select">
                      <button>Select Option</button>
                    </div>
                  </div>
                  <div className="cp-add-product" id="product-5" style={{display: 'none'}}>
                    <div className="cp-add-img-desc">
                      <img src={ThProduct5} alt="product-add" />
                      <span className="cp-add-product-description">Bensonhurst Tufted Square Decorative Pillow </span>
                    </div>
                    <div className="clr-fix" />
                    <span className="cp-add-product-price">$29.99 <sub>sale</sub></span>
                    <span className="cp-add-previous-product-price">was $50 | original</span>
                    <div className="cp-color-carousel-cont">
                      <span><b>COLOR</b> <span className="colorName hide">Lustrous Steel</span></span>
                      <ul className="bxslider5">
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Pewter" src={Swatch1} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Ivory" src={Swatch2} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Primitive Brown" src={Swatch3} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Gray" src={Swatch4} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Empire Red" src={Swatch5} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Majestic yellow" src={Swatch6} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Tofee" src={Swatch7} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Coffee" src={Swatch8} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Royal Blue" src={Swatch9} />
                          </a>
                        </li>
                      </ul>
                      <span className="cp-error-msg colp-color-error">Please Select a Color</span>
                    </div>
                    <div className="cp-add-dropdown">
                      <span>QUANTITY</span>
                      <div className="custom-dropdown cp-sort">
                        <span>1</span>
                        <select>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                    </div>
                    <form className="add-shop-collection-form" action="#">
                      {/* <input type="hidden" name="seleted-color" class="shop-collection-selected-size" data-error="colp-size-error" value=""> */}
                      <input type="hidden" name="selected-size" className="shop-collection-selected-color" data-error="colp-color-error" defaultValue />
                      <input type="hidden" name="quantity" className="shop-collection-selected-quantity" defaultValue={1} />
                    </form>
                    <div className="remove-selection hide">Remove</div>
                    <div className="cp-add" data="cs-product-5.png">
                      <button className="colp-add-btn">Done</button>
                    </div>
                    <div className="cp-update hide">
                      <button className="colp-update-btn">Update</button>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{display: 'inline'}}>
                <div className="each-collection-product">
                  <div className="cp-select-product">
                    <a href="javascript:void(0);" >
                      <img src={PdpProduct7} alt="product"/>
                    </a>
                    <span className="cp-product-description">Bensonhurst Oblong Decorative Pillow</span>
                    <span className="cp-product-price">$29.99 <sub>SALE</sub></span>
                    <span className="cp-previous-product-price">was $50 | original</span>
                    <div className="cp-rating-star">
                      <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      <span className="cp-rating-number">(11)</span>
                    </div>
                    <span className="cp-included tooltip">What is included?</span>
                    <div className="tooltip-container">
                      <p>2-piece Twin comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>sham</li>
                      </ul>
                      <p>3-piece Ful/Queen or King comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>2 sham</li>
                      </ul>
                    </div>
                    <div className="cp-select">
                      <button>Select Option</button>
                    </div>
                  </div>
                  <div className="cp-add-product" id="product-6" style={{display: 'none'}}>
                    <div className="cp-add-img-desc">
                      <img src={ThProduct7} alt="product-add" />
                      <span className="cp-add-product-description">Bensonhurst Oblong Decorative Pillow</span>
                    </div>
                    <div className="clr-fix" />
                    <span className="cp-add-product-price">$29.99 <sub>SALE</sub></span>
                    <span className="cp-add-previous-product-price">was $50 | original</span>
                    <div className="cp-color-carousel-cont">
                      <span><b>COLOR</b> <span className="colorName hide">Lustrous Steel</span></span>
                      <ul className="bxslider5">
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Pewter" src={Swatch1} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Ivory" src={Swatch2} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Primitive Brown" src={Swatch3} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Gray" src={Swatch4} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Empire Red" src={Swatch5} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Majestic yellow" src={Swatch6} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Tofee" src={Swatch7} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Coffee" src={Swatch8} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Royal Blue" src={Swatch9} />
                          </a>
                        </li>
                      </ul>
                      <span className="cp-error-msg colp-color-error">Please Select a Color</span>
                    </div>
                    <div className="cp-add-dropdown">
                      <span>QUANTITY</span>
                      <div className="custom-dropdown cp-sort">
                        <span>1</span>
                        <select>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                    </div>
                    <form className="add-shop-collection-form" action="#">
                      {/* <input type="hidden" name="seleted-color" class="shop-collection-selected-size" data-error="colp-size-error" value=""> */}
                      <input type="hidden" name="selected-size" className="shop-collection-selected-color" data-error="colp-color-error" defaultValue />
                      <input type="hidden" name="quantity" className="shop-collection-selected-quantity" defaultValue={1} />
                    </form>
                    <div className="remove-selection hide">Remove</div>
                    <div className="cp-add" data="cs-product-7.png">
                      <button className="colp-add-btn">Done</button>
                    </div>
                    <div className="cp-update hide">
                      <button className="colp-update-btn">Update</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="seleted-item-image-btn-div  padt53">
            <div className="seleted-item-image-div inline flt-lft">
              <ul>
              </ul>
            </div>
            <div className="cart-addtobag-btn-div inline ">
              <span className="seleted-item-image-div inline padr20"><span id="numof-items">0</span> Item(s) Selected</span>
              <div className="button-container inline">
                <div className="button-wrapper">
                  <button className="redButton"> ADD SELECTED TO BAG</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="pdp-product-desc-container" className="pdp-product-desc-container">
          <div className="pd-produc-desc" style={{fontSize: 'x-small'}}>
            <h3 className="pd-produc-desc-title">PRODUCT DESCRIPTION</h3>
            <p>The Royal Velver Damask Stripe bedding collection is ideal for showcasing.</p>
            <br />
            <ul>
              <li>400 thread-count cotton</li>
              <li>Beautiful allover damask stripe pattern</li>
            </ul>
            <br />
            <p>2-piece Twin comforter set includes</p>
            <ul>
              <li>comforter</li>
              <li>sham</li>
            </ul>
            <br />
            <p>3-piece Full/ Queen or King comforter set includes</p>
            <ul>
              <li>comforter</li>
              <li>sham</li>
            </ul>
            <br />
            <p>Coordinating accessory are sold separately. Twinset includes one standard shams. King set include
              <br />
              two king sham.
            </p>
            <p className="padt20">
              Cotton comforter will polyster fill.machine washable in large capacity and dryer.Imported
            </p>
            <ul className="padt20">
              <li>Twin: comforter is 66X86"</li>
              <li>Full/Queen: comforter is 90x92"</li>
              <li>King: comforter is 104X92"</li>
            </ul>
          </div>
          <div className="pd-helpful-info">
            <h3 className="pd-helpful-info-title">HELPFUL INFORMATION</h3>
            <a href="#" className="pd-help-info-guide">Decorative Bedding Buying Guide</a>
            <a href="#" className="pd-help-info-guide">Helpful Sheets Buying Guide</a>
            <div className="pd-help-info-seperator" />
            <span className="pd-helpful-info-returns">RETURNS</span>
            <p className="pd-helpful-info-return-desc">You can return this item at any JCPenney store. For complete details, read our <a href="#">Return Policy</a></p>
            <div className="pd-help-info-seperator" />
            <h3 className="pd-helpful-info-title">CUSTOMER REVIEW</h3>
            <div className="pd-helpful-info-star">
              <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
              <span>this product is rated <b>4.5 out of 5</b> based on 675 reviews</span>
            </div>
            <div className="pd-fit-summary">
              <span className="pd-fit-fit-count">90%</span>
              <span className="pd-fit-fit-description">of customers would recomend this product to a friend!</span>
            </div>
            <a href="#" className="pd-help-info-guide">See Customer Review</a>
          </div>
          <div className="clr-fix" />
        </div>
        <div id="pdp-ymal-container" className="pdp-ymal-container-div padb50">
          <div className="certonaRecommendation">
            <div className="recentlyViewedRefresh zone-recommendations pdp-carousel-hor pdp-reczone">
              <div className="jcp-prod-recommendations-container recommendation-container product2_rr" data-getitemperpage={4}>
                <div className="jcp-recommendations-title-container">
                  <div className="jcp-recommendations-title">
                    <div id="recMessage" style={{maxWidth: 550}}>YOU MAY ALSO LIKE</div>
                  </div>
                </div>
                <div className="jcp-recommendations-list">
                  <ul className="bxslider1">
                    <li>
                      <div id="ymal-prod-img-cont" className="ymal-prod-img-cont-div">
                        <img src={One}/>
                      </div>
                      <div id="ymal-prod-des-cont" className="ymal-prod-des-cont-div">
                        Home Expressions™ Regal Damask Complete Bedding…
                      </div>
                      <div id="ymal-dis-price-cont" className="ymal-dis-price-cont-div padt10">
                        $46.99 <sub className="ymal-dis">SALE</sub>
                      </div>
                      <div id="ymal-org-price-cont" className="ymal-org-price-cont-div original-price-div">
                        was $69.50 | 40% off
                      </div>
                      <div id="ymal-prod-rat-cont" className="ymal-prod-rat-div padt10">
                        <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      </div>
                    </li>
                    <li>
                      <div id="ymal-prod-img-cont" className="ymal-prod-img-cont-div">
                        <img src={Two} />
                      </div>
                      <div id="ymal-prod-des-cont" className="ymal-prod-des-cont-div">
                        Home Expressions™ Regal Damask Complete Bedding…
                      </div>
                      <div id="ymal-dis-price-cont" className="ymal-dis-price-cont-div padt10">
                        $46.99 <sub className="ymal-dis">SALE</sub>
                      </div>
                      <div id="ymal-org-price-cont" className="ymal-org-price-cont-div original-price-div">
                        was $69.50 | 40% off
                      </div>
                      <div id="ymal-prod-rat-cont" className="ymal-prod-rat-div padt10">
                        <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      </div>
                    </li>
                    <li>
                      <div id="ymal-prod-img-cont" className="ymal-prod-img-cont-div">
                        <img src={Three} />
                      </div>
                      <div id="ymal-prod-des-cont" className="ymal-prod-des-cont-div">
                        Home Expressions™ Regal Damask Complete Bedding…
                      </div>
                      <div id="ymal-dis-price-cont" className="ymal-dis-price-cont-div padt10">
                        $46.99 <sub className="ymal-dis">SALE</sub>
                      </div>
                      <div id="ymal-org-price-cont" className="ymal-org-price-cont-div original-price-div">
                        was $69.50 | 40% off
                      </div>
                      <div id="ymal-prod-rat-cont" className="ymal-prod-rat-div padt10">
                        <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      </div>
                    </li>
                    <li>
                      <div id="ymal-prod-img-cont" className="ymal-prod-img-cont-div">
                        <img src={Four} />
                      </div>
                      <div id="ymal-prod-des-cont" className="ymal-prod-des-cont-div">
                        Home Expressions™ Regal Damask Complete Bedding…
                      </div>
                      <div id="ymal-dis-price-cont" className="ymal-dis-price-cont-div padt10">
                        $46.99 <sub className="ymal-dis">SALE</sub>
                      </div>
                      <div id="ymal-org-price-cont" className="ymal-org-price-cont-div original-price-div">
                        was $69.50 | 40% off
                      </div>
                      <div id="ymal-prod-rat-cont" className="ymal-prod-rat-div padt10">
                        <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      </div>
                    </li>
                    <li>
                      <div id="ymal-prod-img-cont" className="ymal-prod-img-cont-div">
                        <img src={One} />
                      </div>
                      <div id="ymal-prod-des-cont" className="ymal-prod-des-cont-div">
                        Home Expressions™ Regal Damask Complete Bedding…
                      </div>
                      <div id="ymal-dis-price-cont" className="ymal-dis-price-cont-div padt10">
                        $46.99 <sub className="ymal-dis">SALE</sub>
                      </div>
                      <div id="ymal-org-price-cont" className="ymal-org-price-cont-div original-price-div">
                        was $69.50 | 40% off
                      </div>
                      <div id="ymal-prod-rat-cont" className="ymal-prod-rat-div padt10">
                        <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      </div>
                    </li>
                    <li>
                      <div id="ymal-prod-img-cont" className="ymal-prod-img-cont-div">
                        <img src={Two} />
                      </div>
                      <div id="ymal-prod-des-cont" className="ymal-prod-des-cont-div">
                        Home Expressions™ Regal Damask Complete Bedding…
                      </div>
                      <div id="ymal-dis-price-cont" className="ymal-dis-price-cont-div padt10">
                        $46.99 <sub className="ymal-dis">SALE</sub>
                      </div>
                      <div id="ymal-org-price-cont" className="ymal-org-price-cont-div original-price-div">
                        was $69.50 | 40% off
                      </div>
                      <div id="ymal-prod-rat-cont" className="ymal-prod-rat-div padt10">
                        <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      </div>
                    </li>
                    <li>
                      <div id="ymal-prod-img-cont" className="ymal-prod-img-cont-div">
                        <img src={Two} />
                      </div>
                      <div id="ymal-prod-des-cont" className="ymal-prod-des-cont-div">
                        Home Expressions™ Regal Damask Complete Bedding…
                      </div>
                      <div id="ymal-dis-price-cont" className="ymal-dis-price-cont-div padt10">
                        $46.99 <sub className="ymal-dis">SALE</sub>
                      </div>
                      <div id="ymal-org-price-cont" className="ymal-org-price-cont-div original-price-div">
                        was $69.50 | 40% off
                      </div>
                      <div id="ymal-prod-rat-cont" className="ymal-prod-rat-div padt10">
                        <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="ads-title">
          Ads related to: <b>Vans® Canvie Canvas Pants</b>
        </h3>
        <ul className="ads-container">
          <li>
            <div className="ads-left">
              <img className="ad-icon" src="/public/assets/image/vans.png" />
              <a className="ad-url" href="#">
                <span>vans.seense.com</span>
                <div className="arrow-down">▼</div>
              </a>
            </div>
            <div className="ads-right">
              <h4 className="ad-title">Vans For Men‎</h4>
              <p className="ad-description">New Fall/Winter 2015 Collection‎ Shop Sneakers &amp; Shoes!‎‎ Brands: ‎Giuseppe Zanotti‎, Kenzo‎, Balmain‎, Givenchy‎, Burberry‎, Diesel‎, Versace‎, Acne Studio‎, Lanvin‎</p>
            </div>
            <div className="clr-fix" />
          </li>
          <li>
            <div className="ads-left">
              <img className="ad-icon" src="/public/assets/image/info.png" />
              <a className="ad-url" href="#">
                <span>info.com</span>
                <div className="arrow-down">▼</div>
              </a>
            </div>
            <div className="ads-right">
              <h4 className="ad-title">Vans Canvie Pants‎</h4>
              <p className="ad-description">Get <b>Vans Canvie Pants</b> Info.‎ Metasearch &amp; Social Results Now.‎‎</p>
            </div>
            <div className="clr-fix" />
          </li>
          <li>
            <div className="ads-left">
              <img className="ad-icon" src="/public/assets/image/dogpile.png" />
              <a className="ad-url" href="#">
                <span>info.dogpile.com</span>
                <div className="arrow-down">▼</div>
              </a>
            </div>
            <div className="ads-right">
              <h4 className="ad-title">Vans Pants</h4>
              <p className="ad-description">Search all the best sites for‎ <b>Vans Pants.‎‎</b>b&gt;</p>
            </div>
            <div className="clr-fix" />
          </li>
          <li>
            <div className="ads-left">
              <img className="ad-icon" src="/public/assets/image/zapmeta.png" />
              <a className="ad-url" href="#">
                <span>zapmeta.co.in</span>
                <div className="arrow-down">▼</div>
              </a>
            </div>
            <div className="ads-right">
              <h4 className="ad-title">Vans Shoes Sale</h4>
              <p className="ad-description">Search <b>Van</b> Shoes Sale‎ Get Results from 6 Engines at Once</p>
            </div>
            <div className="clr-fix" />
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductPage;
