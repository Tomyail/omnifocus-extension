JsOsaDAS1.001.00bplist00�Vscripto- v a r   a p p   =   A p p l i c a t i o n ( " O m n i f o c u s " ) ; 
 a p p . i n c l u d e S t a n d a r d A d d i t i o n s   =   t r u e ; 
 
 v a r   t a r g e t K e y   =   a p p . d i s p l a y D i a l o g ( "����QeO�e9\^`' " ,   { 
     d e f a u l t A n s w e r :   " d e f e r D a t e " 
 } ) . t e x t R e t u r n e d ; 
 v a r   t a r g e t F n   =   e v a l ( 
     a p p . d i s p l a y D i a l o g ( "����QeYtQ�ep " ,   { 
         d e f a u l t A n s w e r :   " ( i n d e x , c u r , p r e )   = >   { r e t u r n   n e w   D a t e ( n e w   D a t e ( ' T h u   D e c   1 3   2 0 1 9   2 0 : 0 0 : 0 0   G M T + 0 8 0 0   (N-V�hQ�e��� ) ' ) . v a l u e O f ( )   +   i n d e x   *   2 4   *   6 0   *   6 0   *   1 0 0 0 )   } " 
     } ) . t e x t R e t u r n e d 
 ) ; 
 / / ( i n d e x , c u r , p r e )   = >   { r e t u r n   n e w   D a t e ( n e w   D a t e ( " T h u   D e c   1 2   2 0 1 9   2 0 : 0 0 : 0 0   G M T + 0 8 0 0   (N-V�hQ�e��� ) " ) . v a l u e O f ( )   +   i n d e x   *   2 4   *   6 0   *   6 0   *   1 0 0 0 )   } 
 
 v a r   s e l e c t e d T r e e s   = 
     a p p . d e f a u l t D o c u m e n t . d o c u m e n t W i n d o w s [ 0 ] . c o n t e n t . s e l e c t e d T r e e s ( ) ; 
 f o r   ( v a r   i   =   0 ;   i   <   s e l e c t e d T r e e s . l e n g t h ;   i + + )   { 
     s e l e c t e d T r e e s [ i ] . v a l u e ( ) [ t a r g e t K e y ]   =   t a r g e t F n ( 
         i , 
         s e l e c t e d T r e e s [ i ] . v a l u e ( ) , 
         i   = = =   0   ?   n u l l   :   s e l e c t e d T r e e s [ i   -   1 ] . v a l u e ( ) 
     ) ; 
 } 
                              pjscr  ��ޭ